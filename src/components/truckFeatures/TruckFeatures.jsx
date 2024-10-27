import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { campersApi } from '../../api';
import styles from './TruckFeatures.module.css';
import FeatureBadge from '../featureBadge/FeatureBadge';

function TruckFeatures() {
  const { id } = useParams();
  const [features, setFeatures] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setIsLoading(true);
        const featuresData = await campersApi.getCamperDetails(id);
        setFeatures(featuresData.features);
      } catch (error) {
        setError('Failed to fetch features');
        console.error('Error fetching features:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, [id]);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!features) return null;

  return (
    <div className={styles.featuresContainer}>
      <ul className={styles.featuresList}>
        {Object.entries(features).map(([key]) => (
          <FeatureBadge key={key} iconName={key.toLowerCase()} text={key} />
        ))}
      </ul>
    </div>
  );
}

export default TruckFeatures;
