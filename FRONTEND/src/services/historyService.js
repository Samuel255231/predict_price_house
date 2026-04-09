import api from "../api/api";

export const getHistory = async () => {
  try {
    const response = await api.get("/historique");
    return response.data.historique;
  } catch (error) {
    console.error("Erreur récupération historique:", error.response?.data || error.message);
    throw error;
  }
};