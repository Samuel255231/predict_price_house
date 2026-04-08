import pymysql
from app.config.config import settings

def save_prediction(data, prix):
    connection = pymysql.connect(
        host=settings.DB_HOST,
        user=settings.DB_USER,
        password=settings.DB_PASSWORD,
        database=settings.DB_NAME
    )

    with connection.cursor() as cursor:
        query = """
        INSERT INTO historique (
            prix, superficie_m2, nb_chambres, nb_etages,
            localisation, acces_route, eau_electricite, type_connexion,
            parking, type_sol, etat_maison, annee_construction
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        cursor.execute(query, (
            prix,
            data["superficie_m2"],
            data["nb_chambres"],
            data["nb_etages"],
            data["localisation"],
            data["acces_route"],
            data["eau_electricite"],
            data["type_connexion"],
            data["parking"],
            data["type_sol"],
            data["etat_maison"],
            data["annee_construction"]
        ))

    connection.commit()
    connection.close()


def get_all_predictions():
    connection = pymysql.connect(
        host=settings.DB_HOST,
        user=settings.DB_USER,
        password=settings.DB_PASSWORD,
        database=settings.DB_NAME,
        cursorclass=pymysql.cursors.DictCursor  # 🔥 important pour JSON
    )

    with connection.cursor() as cursor:
        query = "SELECT * FROM historique ORDER BY date_prediction DESC"
        cursor.execute(query)
        results = cursor.fetchall()

    connection.close()
    return results