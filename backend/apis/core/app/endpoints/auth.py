from fastapi import APIRouter
from modules.auth.model import UserRequest

router = APIRouter()

@router.post(
    "/register",
    summary = "User registration"
)
async def register_user(user : UserRequest):
    return 3