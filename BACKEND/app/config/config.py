import os
from dotenv import load_dotenv

# Charger les variables .env
load_dotenv()

class Settings:
    # App
    APP_NAME = os.getenv("APP_NAME")
    DEBUG = os.getenv("DEBUG") == "True"

    # Database
    DB_HOST = os.getenv("DB_HOST")
    DB_PORT = os.getenv("DB_PORT")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_NAME = os.getenv("DB_NAME")

    # URL SQLAlchemy
    DATABASE_URL = (
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )

# Instance globale
settings = Settings()