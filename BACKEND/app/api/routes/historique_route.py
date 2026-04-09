from fastapi import APIRouter
from app.services.db_service import get_all_predictions

router = APIRouter()

@router.get("/historique")
async def get_historique():
    data = get_all_predictions()
    return {
        "historique": data
    }