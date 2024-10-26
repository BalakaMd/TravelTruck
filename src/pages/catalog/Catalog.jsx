import { useState, useEffect } from 'react';
import Filters from '../../components/filters/Filters';
import Navigation from '../../components/navigation/Navigation';
import ProductList from '../../components/productList/ProductList';
import styles from './Catalog.module.css';
import { campersApi } from '../../api';
import { useSelector } from 'react-redux';

function Catalog() {
  const filters = useSelector(state => state.filters);
  const [campersData, setCampersData] = useState([]);
  const [displayedCampers, setDisplayedCampers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        setIsLoading(true);
        const data = await campersApi.getAllCampers(filters);
        setCampersData(data);
        setIsLoading(false);
      } catch {
        setError('Failed to fetch campers. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchCampers();
  }, [filters]);

  useEffect(() => {
    setDisplayedCampers(campersData.slice(0, displayCount));
  }, [campersData, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 4);
  };

  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div>
      <Navigation />
      {isLoading ? (
        <div className={styles.loadingContainer}>Loading...</div>
      ) : (
        <div className={styles.catalogContainer}>
          <div className={styles.catalogSidebar}>
            <Filters />
          </div>
          <div className={styles.catalogMain}>
            <ProductList campers={displayedCampers} />
            {displayCount < campersData.length && (
              <button
                onClick={handleLoadMore}
                className={styles.loadMoreButton}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
