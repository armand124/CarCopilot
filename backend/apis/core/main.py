from fastapi import FastAPI
from app.core.db import connectToDatabase, disconnectFromDatabase
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app : FastAPI):
    await connectToDatabase()
    yield 
    await disconnectFromDatabase()


app = FastAPI(lifespan=lifespan)

app.include_router()