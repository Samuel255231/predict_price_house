import { useState } from "react";
import { predictPrice } from "../services/predictService";

export default function PredictForm({ onResult }) {
  const [form, setForm] = useState({
    superficie_m2: "",
    nb_chambres: "",
    nb_etages: "",
    localisation: "urbain",
    acces_route: 0,
    eau_electricite: 0,
    type_connexion: "aucune",
    parking: 0,
    type_sol: "brut",
    etat_maison: "neuf",
    annee_construction: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await predictPrice(form);
      onResult(result);
    } catch (err) {
      setError(err.response?.data?.detail || err.message || "Erreur lors de la prédiction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading-message">Chargement...</div>}
      <label>
        Superficie m²:
        <input type="number" name="superficie_m2" value={form.superficie_m2} onChange={handleChange} required />
      </label>

      <label>
        Nombre de chambres:
        <input type="number" name="nb_chambres" value={form.nb_chambres} onChange={handleChange} required />
      </label>

      <label>
        Nombre d'étages:
        <input type="number" name="nb_etages" value={form.nb_etages} onChange={handleChange} required />
      </label>

      <fieldset>
        <legend>Localisation</legend>
        <label>
          <input type="radio" name="localisation" value="urbain" checked={form.localisation === "urbain"} onChange={handleChange} />
          Urbain
        </label>
        <label>
          <input type="radio" name="localisation" value="periurbain" checked={form.localisation === "periurbain"} onChange={handleChange} />
          Périurbain
        </label>
        <label>
          <input type="radio" name="localisation" value="rural" checked={form.localisation === "rural"} onChange={handleChange} />
          Rural
        </label>
      </fieldset>

      <label>
        Accès route:
        <input type="checkbox" name="acces_route" checked={form.acces_route === 1} onChange={handleChange} />
      </label>

      <label>
        Eau & électricité:
        <input type="checkbox" name="eau_electricite" checked={form.eau_electricite === 1} onChange={handleChange} />
      </label>

      <fieldset>
        <legend>Type connexion</legend>
        <label>
          <input type="radio" name="type_connexion" value="aucune" checked={form.type_connexion === "aucune"} onChange={handleChange} />
          Aucune
        </label>
        <label>
          <input type="radio" name="type_connexion" value="fibre" checked={form.type_connexion === "fibre"} onChange={handleChange} />
          Fibre
        </label>
        <label>
          <input type="radio" name="type_connexion" value="starlink" checked={form.type_connexion === "starlink"} onChange={handleChange} />
          Starlink
        </label>
      </fieldset>

      <label>
        Parking:
        <input type="checkbox" name="parking" checked={form.parking === 1} onChange={handleChange} />
      </label>

      <fieldset>
        <legend>Type sol</legend>
        <label>
          <input type="radio" name="type_sol" value="brut" checked={form.type_sol === "brut"} onChange={handleChange} />
          Brut
        </label>
        <label>
          <input type="radio" name="type_sol" value="ciment" checked={form.type_sol === "ciment"} onChange={handleChange} />
          Ciment
        </label>
        <label>
          <input type="radio" name="type_sol" value="carrelage" checked={form.type_sol === "carrelage"} onChange={handleChange} />
          Carrelage
        </label>
      </fieldset>

      <fieldset>
        <legend>État maison</legend>
        <label>
          <input type="radio" name="etat_maison" value="a_renover" checked={form.etat_maison === "a_renover"} onChange={handleChange} />
          À rénover
        </label>
        <label>
          <input type="radio" name="etat_maison" value="bon" checked={form.etat_maison === "bon"} onChange={handleChange} />
          Bon
        </label>
        <label>
          <input type="radio" name="etat_maison" value="neuf" checked={form.etat_maison === "neuf"} onChange={handleChange} />
          Neuf
        </label>
      </fieldset>

      <label>
        Année construction:
        <input type="number" name="annee_construction" value={form.annee_construction} onChange={handleChange} required />
      </label>

      <button type="submit">Prédire</button>
    </form>
  );
}