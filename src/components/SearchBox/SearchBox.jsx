import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={handleChangeFilter}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
