import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PredictPage from "./pages/PredictPage";
import HistoryPage from "./pages/HistoryPage";
import "./App.css"; // Styles spécifiques à l'app

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <Link to="/">Prédiction</Link>
          <Link to="/historique">Historique</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PredictPage />} />
          <Route path="/historique" element={<HistoryPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;