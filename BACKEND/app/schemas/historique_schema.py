from pydantic import BaseModel
from datetime import datetime

class HistoriqueResponse(BaseModel):
    id: int
    prix: float
    superficie_m2: float
    nb_chambres: int
    nb_etages: int

    localisation: str
    acces_route: int
    eau_electricite: int
    type_connexion: str

    parking: int
    type_sol: str
    etat_maison: str

    annee_construction: int
    date_prediction: datetime