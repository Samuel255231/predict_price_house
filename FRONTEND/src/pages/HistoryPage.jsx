import { useEffect, useState } from "react";
import { getHistory } from "../services/historyService";
import HistoryList from "../components/HistoryList";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then((data) => setHistory(data));
  }, []);

  return (
    <div>
      <h1>Historique des prédictions</h1>
      <HistoryList history={history} />
    </div>
  );
}