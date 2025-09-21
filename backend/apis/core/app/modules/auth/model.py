from pydantic import BaseModel
class UserRequest(BaseModel):
    email : str
    password : str
    first_name : str
    last_name : str
    
class Token(BaseModel):
    access_token: str