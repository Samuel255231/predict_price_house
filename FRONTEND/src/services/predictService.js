import api from "../api/api";

export const predictPrice = async (data) => {
  try {
    const response = await api.post("/predict", data);
    return response.data;
  } catch (error) {
    console.error("Erreur de prédiction:", error.response?.data || error.message);
    throw error;
  }
};