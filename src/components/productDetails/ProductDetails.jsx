import { useState, useEffect } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';
import { campersApi } from '../../api';
import styles from './ProductDetails.module.css';
import { icons } from '../../assets/icons';
import BookForm from '../bookForm/BookForm';

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

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!camper) return <div className={styles.error}>No camper found</div>;

  const { name, price, rating, location, description, gallery, reviews } =
    camper;
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

      {/* Info Section */}
      <div className={styles.infoSection}>
        <NavLink
          to={`/catalog/${id}/features`}
          state={{ from: location.state?.from }}
          className={({ isActive }) =>
            `${styles.infoLink} ${isActive ? styles.activeInfoLink : ''}`
          }
        >
          Features
        </NavLink>
        <NavLink
          to={`/catalog/${id}/reviews`}
          state={{ from: location.state?.from }}
          className={({ isActive }) =>
            `${styles.infoLink} ${isActive ? styles.activeInfoLink : ''}`
          }
        >
          Reviews
        </NavLink>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
        <div className={styles.bookFormContainer}>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
