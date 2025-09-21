from app.modules.auth.service import create_access_token,decode_token
from datetime import timedelta
import pytest
from app.core.db import connectToDatabase

@staticmethod
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

@staticmethod
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
  
