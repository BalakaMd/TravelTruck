import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filters from '../../components/filters/Filters';
import Navigation from '../../components/navigation/Navigation';
import ProductList from '../../components/productList/ProductList';
import styles from './Catalog.module.css';
import { fetchCampers } from '../../redux/operations';

function Catalog() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const {
    list: campersData,
    status,
    error,
  } = useSelector(state => state.vehicles);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  const displayedCampers = campersData.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 4);
  };

  if (status === 'loading')
    return <div className={styles.loadingContainer}>Loading...</div>;
  if (status === 'failed')
    return <div className={styles.error}>Error: {error}</div>;

  return (
    <div>
      <Navigation />
      <div className={styles.catalogContainer}>
        <div className={styles.catalogSidebar}>
          <Filters />
        </div>
        <div className={styles.catalogMain}>
          <ProductList campers={displayedCampers} />
          {displayCount < campersData.length && (
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
