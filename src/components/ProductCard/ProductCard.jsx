import styles from './ProductCard.module.css';
import MainBtn from '../mainBtn/MainBtn';
import FeatureBadge from '../featureBadge/FeatureBadge';
import { icons } from '../../assets/icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';

const ProductCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(camper.id));
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    bathroom,
    AC,
    tv,
    radio,
    refrigerator,
    gas,
    water,
    kitchen,
    gallery,
    reviews,
  } = camper;

  useEffect(() => {
    setIsFavorite(favorites.includes(camper.id));
  }, [favorites, camper.id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper.id));
    }
  };

  const StarIcon = reviews.length > 0 ? icons.activeStar : icons.defaultStar;

  return (
    <div className={styles.card}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src={gallery[0].original} alt={name} className={styles.image} />
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.location}>
              <img src={StarIcon} alt="Star" /> {rating} ({reviews.length}{' '}
              Reviews)
              <span className={styles.divider}>|</span>
              <img src={icons.map} alt="MapIcon" /> {location}
            </div>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.price}>€{price.toFixed(2)}</span>
            <button onClick={toggleFavorite} className={styles.favoriteButton}>
              <img
                src={isFavorite ? icons.RedHeart : icons.heart}
                alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className={styles.description}>
          {' '}
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>

        {/* Features */}
        <div className={styles.features}>
          {refrigerator && (
            <FeatureBadge iconName="refrigerator" text="Refrigerator" />
          )}
          {bathroom && <FeatureBadge iconName="bathroom" text="Bathroom" />}
          {tv && <FeatureBadge iconName="tv" text="TV" />}
          {radio && <FeatureBadge iconName="radio" text="Radio" />}
          {gas && <FeatureBadge iconName="gas" text="Gas" />}
          {water && <FeatureBadge iconName="water" text="Water" />}
          {AC && <FeatureBadge iconName="ac" text="AC" />}
          {kitchen && <FeatureBadge iconName="kitchen" text="Kitchen" />}
        </div>

        {/* Show More Button */}
        <MainBtn linkTo={`/catalog/${id}/features`}>Show more</MainBtn>
      </div>
    </div>
  );
};

export default ProductCard;
