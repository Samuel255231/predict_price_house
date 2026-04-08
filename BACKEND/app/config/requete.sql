CREATE DATABASE IF NOT EXISTS predict_db;
USE predict_db;

CREATE TABLE IF NOT EXISTS historique (
    id INT AUTO_INCREMENT PRIMARY KEY,

    prix FLOAT NOT NULL,
    superficie_m2 FLOAT NOT NULL,
    nb_chambres INT NOT NULL,
    nb_etages INT NOT NULL,

    localisation VARCHAR(50) NOT NULL,
    acces_route BOOLEAN NOT NULL,
    eau_electricite BOOLEAN NOT NULL,
    type_connexion VARCHAR(50) NOT NULL,

    parking BOOLEAN NOT NULL,
    type_sol VARCHAR(50) NOT NULL,
    etat_maison VARCHAR(50) NOT NULL,

    annee_construction INT NOT NULL,

    date_prediction TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);