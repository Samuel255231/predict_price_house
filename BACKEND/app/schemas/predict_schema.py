from pydantic import BaseModel

class PredictRequest(BaseModel):
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