from fastapi import APIRouter
from app.modules.auth.model import UserRequest
from app.modules.auth.service import AuthService

router = APIRouter()

@router.post(
    "/register",
    summary = "User registration"
)
async def register_user(user : UserRequest):
    return await AuthService.register_user(user.email, user.password, user.first_name, user.last_name)
