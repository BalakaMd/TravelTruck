import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { campersApi } from '../../api';
import styles from './ProductDetails.module.css';
import { icons } from '../../assets/icons';

const ProductDetails = () => {
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!camper) return null;

  const { name, price, rating, location, description, gallery, reviews } =
    camper;
  console.log('gallery', gallery);
  const StarIcon = reviews.length > 0 ? icons.activeStar : icons.defaultStar;

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.info}>
          <div className={styles.location}>
            <img src={StarIcon} alt="Star" /> {rating} ({reviews.length}{' '}
            Reviews)
            <img src={icons.map} alt="MapIcon" /> {location}
          </div>
        </div>
        <div className={styles.price}>€{price.toFixed(2)}</div>
      </div>

      {/* Images Gallery */}
      <div className={styles.gallery}>
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={`${name} view ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>

      {/* Description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProductDetails;
