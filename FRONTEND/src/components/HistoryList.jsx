export default function HistoryList({ history }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Prix</th>
          <th>Superficie</th>
          <th>Chambres</th>
          <th>Étages</th>
          <th>Localisation</th>
          <th>Accès route</th>
          <th>Eau/Électricité</th>
          <th>Type connexion</th>
          <th>Parking</th>
          <th>Type sol</th>
          <th>État maison</th>
          <th>Année construction</th>
          <th>Date prédiction</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.prix}</td>
            <td>{item.superficie_m2}</td>
            <td>{item.nb_chambres}</td>
            <td>{item.nb_etages}</td>
            <td>{item.localisation}</td>
            <td>{item.acces_route}</td>
            <td>{item.eau_electricite}</td>
            <td>{item.type_connexion}</td>
            <td>{item.parking}</td>
            <td>{item.type_sol}</td>
            <td>{item.etat_maison}</td>
            <td>{item.annee_construction}</td>
            <td>{new Date(item.date_prediction).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}