import styles from './ProductCard.module.css';
import MainBtn from '../mainBtn/MainBtn';
import FeatureBadge from '../featureBadge/FeatureBadge';
import { icons } from '../../assets/icons';

const ProductCard = ({ camper }) => {
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
            <span className={styles.icon}>
              <img src={icons.heart} alt="Heart" />
            </span>
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
            <FeatureBadge iconName="fridge" text="Refrigerator" />
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
        <MainBtn linkTo={`/catalog/${id}`}>Show more</MainBtn>
      </div>
    </div>
  );
};

export default ProductCard;
