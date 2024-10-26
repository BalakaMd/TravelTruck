import styles from './Filters.module.css';
import { icons } from '../../assets/icons';

const VehicleTypeFilter = ({ filters, handleFilterChange }) => {
  const vehicleTypes = ['van', 'integrated', 'alcove'];

  return (
    <div className={styles.buttonGrid}>
      {vehicleTypes.map(type => (
        <button
          key={type}
          className={`${styles.filterButton} ${
            filters.type === type ? styles.filterButtonActive : ''
          }`}
          onClick={() => handleFilterChange('type', type)}
        >
          <img src={icons[type]} alt={type} className={styles.icon} />
          <span>
            {type === 'integrated' ? (
              <>
                Fully
                <br />
                Integrated
              </>
            ) : (
              type.charAt(0).toUpperCase() + type.slice(1)
            )}
          </span>
        </button>
      ))}
    </div>
  );
};

export default VehicleTypeFilter;
