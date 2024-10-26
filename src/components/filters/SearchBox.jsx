import MapIcon from '/src/assets/icons/map.svg';
import styles from './SearchBox.module.css';

const SearchBox = ({ handleFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Location
      </label>

      <div className={styles.inputContainer}>
        <img src={MapIcon} alt="Map" className={styles.icon} />
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={e => handleFilterChange('location', e.target.value)}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default SearchBox;
