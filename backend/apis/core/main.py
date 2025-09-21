from fastapi import FastAPI
from app.core.db import connectToDatabase, disconnectFromDatabase
from contextlib import asynccontextmanager
from app.endpoints import auth

@asynccontextmanager
async def lifespan(app : FastAPI):
    await connectToDatabase()
    yield 
    await disconnectFromDatabase()

app = FastAPI(lifespan=lifespan)

#Endpoints
app.include_router(auth.router)