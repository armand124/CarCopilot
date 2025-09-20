from pymongo import AsyncMongoClient
from app.core.config import settings

db = None
client = None

async def connectToDatabase() -> None:
    global db,client
    client = AsyncMongoClient(settings.DB_URI)
    db = client[settings.DB_NAME]

async def disconnectFromDatabase() -> None:
    global client
    if client:
        client.close()