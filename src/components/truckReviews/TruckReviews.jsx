import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { campersApi } from '../../api';
import styles from './TruckReviews.module.css';

function TruckReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const fetchedReviews = await campersApi.getCamperReviews(id);
        setReviews(fetchedReviews);
      } catch {
        setError('Failed to fetch reviews. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  const renderStars = rating => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>{index < rating ? '★' : '☆'}</span>
    ));
  };

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewItem}>
          <div className={styles.avatar}>{review.reviewer_name[0]}</div>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.name}>{review.reviewer_name}</div>
              <div className={styles.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
            <div className={styles.text}>{review.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TruckReviews;
