from fastapi import APIRouter
from app.services.db_service import get_all_predictions

router = APIRouter()

@router.get("/historique")
def get_historique():
    data = get_all_predictions()
    return {
        "historique": data
    }