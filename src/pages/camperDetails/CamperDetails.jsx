import ProductDetails from '../../components/productDetails/ProductDetails';
import Navigation from '../../components/navigation/Navigation';
import { Toaster } from 'react-hot-toast';

const CamperDetails = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Navigation />
      <ProductDetails />
    </div>
  );
};

export default CamperDetails;
