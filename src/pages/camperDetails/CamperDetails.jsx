import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { campersApi } from '../../api';
import ProductDetails from '../../components/productDetails/ProductDetails';
import Navigation from '../../components/navigation/Navigation';
import styles from './CamperDetails.module.css';

const CamperDetails = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        setIsLoading(true);
        const data = await campersApi.getCamperById(id);
        setCamper(data);
        setIsLoading(false);
      } catch {
        setError('Failed to fetch camper details. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchCamperDetails();
  }, [id]);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!camper) return <div className={styles.error}>No camper found</div>;

  return (
    <div>
      <Navigation />
      <ProductDetails />
    </div>
  );
};

export default CamperDetails;
