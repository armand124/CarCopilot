from app.modules.auth.service import create_access_token,decode_token
from app.modules.auth.repository import AuthRepository
from datetime import timedelta
import pytest,asyncio
from app.core.db import connectToDatabase

pytest_plugins = ('pytest_asyncio',)

@pytest.mark.asyncio
async def test_token():
   await connectToDatabase()
   info = {
    "nume" : "Gigel",
    "parola" : "KEKW"
    }
   cod = create_access_token(info,timedelta(minutes=20))
   decoded_info = decode_token(cod)
   decoded_info.pop("exp",None)
   assert (cod is not None) and (decoded_info == info)

@pytest.mark.asyncio
async def test_expired_token():
   await connectToDatabase()
   secret = "John Doe"
   info = {
      "secret_information" : secret
   }

   cod = create_access_token(info,timedelta(seconds=-1))

   from jwt.exceptions import ExpiredSignatureError
   
   with pytest.raises(ExpiredSignatureError):
      decode_token(cod)
