import { useState } from "react";
import PredictForm from "../components/PredictForm";

export default function PredictPage() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Prédiction du prix maison</h1>
      <PredictForm onResult={(data) => setResult(data)} />
      {result && (
        <div className="result">
          <h2>Résultat :</h2>
          <p>Prix estimé : {result.prix_predit} millions Ar</p>
        </div>
      )}
    </div>
  );
}