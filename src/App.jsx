import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import CamperDetails from './pages/camperDetails/CamperDetails';
import TruckFeatures from './components/truckFeatures/TruckFeatures';
import TruckReviews from './components/truckReviews/TruckReviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />}>
          <Route path="features" element={<TruckFeatures />} />
          <Route path="reviews" element={<TruckReviews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
