import pandas as pd

def preprocess_input(data: dict):
    processed = {
        "superficie_m2": data["superficie_m2"],
        "nb_chambres": data["nb_chambres"],
        "nb_etages": data["nb_etages"],
        "acces_route": data["acces_route"],
        "eau_electricite": data["eau_electricite"],
        "parking": data["parking"],
        "annee_construction": data["annee_construction"],

        # One-hot initialisé
        "localisation_periurbain": 0,
        "localisation_rural": 0,
        "localisation_urbain": 0,

        "type_connexion_aucune": 0,
        "type_connexion_fibre": 0,
        "type_connexion_starlink": 0,

        "type_sol_brut": 0,
        "type_sol_carrelage": 0,
        "type_sol_ciment": 0,

        "etat_maison_a_renover": 0,
        "etat_maison_bon": 0,
        "etat_maison_neuf": 0,
    }

    # Activation des bonnes colonnes
    processed[f"localisation_{data['localisation']}"] = 1
    processed[f"type_connexion_{data['type_connexion']}"] = 1
    processed[f"type_sol_{data['type_sol']}"] = 1
    processed[f"etat_maison_{data['etat_maison']}"] = 1

    return pd.DataFrame([processed])