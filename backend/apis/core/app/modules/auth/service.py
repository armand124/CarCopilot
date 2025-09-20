from datetime import datetime, timedelta, timezone
from app.core.config import settings
import jwt

def create_access_token(data : dict, expires_delta : timedelta) -> str:
    info = data.copy()

    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes = 60)

    info.update({"exp" : expire})
    jwt_token = jwt.encode(info, key=settings.SECRET_KEY,algorithm=settings.JWT_ALGORITHM)
    return jwt_token
