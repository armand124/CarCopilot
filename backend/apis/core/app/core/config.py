from pydantic_settings import BaseSettings
class Settings(BaseSettings):
    DB_URI: str
    DB_NAME: str

    JWT_ALGORITHM: str
    SECRET_KEY: str
    class Config:
        env_file = ".env"

settings = Settings()
