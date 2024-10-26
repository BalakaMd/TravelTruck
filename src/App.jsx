import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import CamperDetails from './pages/camperDetails/CamperDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
