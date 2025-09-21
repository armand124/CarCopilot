from datetime import datetime, timedelta, timezone
from app.core.config import settings
import jwt
from fastapi import HTTPException
from app.modules.auth.repository import AuthRepository
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data : dict, expires_delta : timedelta) -> str:
    info = data.copy()

    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes = 60)

    info.update({"exp" : expire})
    jwt_token = jwt.encode(info, key=settings.SECRET_KEY,algorithm=settings.JWT_ALGORITHM)
    return jwt_token

def decode_token(token : str) -> dict:
    info = jwt.decode(token, settings.SECRET_KEY, settings.JWT_ALGORITHM)
    return info

class AuthService:
    @staticmethod
    async def register_user(email : str, password : str, first_name : str, last_name : str):
        result = await AuthRepository.search_user_by_email(email)
        if result:
            raise HTTPException(400, "There is already an account registered with this email")

        password = hash_password(password)
        
        try:
            await AuthRepository.insert_user(email, password, first_name, last_name)
            token = create_access_token({"email" : email}, timedelta(days=2))
            return {"message" : "User succesfully registered", "access_token" : token}
        except Exception:
            raise HTTPException(500, "There was a problem at the registration process")

