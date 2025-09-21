from app.core.db import db
from app.core.config import settings
class AuthRepository:
    #TODO FIX DB CONNECTION PROBLEM
    db = db[settings.DB_USER_COLLECTION]

    @staticmethod
    async def search_user_by_email(email : str):
        usr = await db.find_one({"email" : email})
        return usr
    
    @staticmethod
    async def insert_user(email : str, password : str, first_name : str, last_name : str):
        result = await db.insert_one({
            "email" : email,
            "password" : password,
            "first_name" : first_name,
            "last_name" : last_name
        })
        return result.inserted_id