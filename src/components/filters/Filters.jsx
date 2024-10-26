import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filters.module.css';
import EquipmentFilter from './EquipmentFilter';
import VehicleTypeFilter from './VehicleTypeFilter';
import SearchBox from './SearchBox';

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    equipment: [],
    type: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      if (filterType === 'equipment') {
        const newEquipment = prevFilters.equipment.includes(value)
          ? prevFilters.equipment.filter(item => item !== value)
          : [...prevFilters.equipment, value];
        return { ...prevFilters, equipment: newEquipment };
      }
      if (filterType === 'type') {
        return {
          ...prevFilters,
          type: prevFilters.type === value ? '' : value,
        };
      }
      return { ...prevFilters, [filterType]: value };
    });
  };

  const handleSearch = () => {
    dispatch({
      type: 'filters/setFilters',
      payload: filters,
    });
  };

  return (
    <>
      <SearchBox handleFilterChange={handleFilterChange} />
      <div className={styles.filters}>
        <div className={styles.section}>
          <h2 className={styles.title}>Filters</h2>
          <div className={styles.filterGroup}>
            <h3 className={styles.subtitle}>Vehicle equipment</h3>
            <EquipmentFilter
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className={styles.filterGroup}>
            <h3 className={styles.subtitle}>Vehicle type</h3>
            <VehicleTypeFilter
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </>
  );
};

export default Filters;
