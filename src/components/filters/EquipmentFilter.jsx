import styles from './Filters.module.css';
import { icons } from '../../assets/icons';

const EquipmentFilter = ({ filters, handleFilterChange }) => {
  const equipmentList = ['ac', 'automatic', 'kitchen', 'tv', 'bathroom'];

  return (
    <div className={styles.buttonGrid}>
      {equipmentList.map(equipment => (
        <button
          key={equipment}
          className={`${styles.filterButton} ${
            filters.equipment.includes(equipment)
              ? styles.filterButtonActive
              : ''
          }`}
          onClick={() => handleFilterChange('equipment', equipment)}
        >
          <img src={icons[equipment]} alt={equipment} className={styles.icon} />
          <span>{equipment.charAt(0).toUpperCase() + equipment.slice(1)}</span>
        </button>
      ))}
    </div>
  );
};

export default EquipmentFilter;
