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
        setFeatures(featuresData);
      } catch (error) {
        setError('Failed to fetch features');
        console.error('Error fetching features:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, [id]);

  const vehicleDetails = features
    ? [
        {
          label: 'Form',
          value:
            features.details.form.charAt(0).toUpperCase() +
            features.details.form.slice(1),
        },
        { label: 'Length', value: features.details.length },
        { label: 'Width', value: features.details.width },
        { label: 'Height', value: features.details.height },
        { label: 'Tank', value: features.details.tank },
        {
          label: 'Consumption',
          value: features.details.consumption,
        },
      ]
    : [];

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!features) return null;

  return (
    <div className={styles.featuresContainer}>
      <ul className={styles.featuresList}>
        {Object.entries(features.features).map(([key]) => (
          <FeatureBadge key={key} iconName={key.toLowerCase()} text={key} />
        ))}
      </ul>
      {/* Vehicle Details */}
      <div className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Vehicle details</h2>
        <div className={styles.detailsList}>
          {vehicleDetails.map(detail => (
            <div key={detail.label} className={styles.detailRow}>
              <span className={styles.detailLabel}>{detail.label}</span>
              <span className={styles.detailValue}>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TruckFeatures;
