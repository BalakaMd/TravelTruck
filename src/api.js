import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const campersApi = {
  getAllCampers: async (filters = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/campers`, {});
      let filteredItems = response.data.items;

      // Convert all string filters to lowercase
      const lowercaseFilters = {
        ...filters,
        location: filters.location?.toLowerCase() || '',
        type: filters.type?.toLowerCase() || '',
        equipment: filters.equipment?.map(item => item.toLowerCase()) || [],
      };

      // Filter by location
      if (lowercaseFilters.location) {
        filteredItems = filteredItems.filter(item =>
          item.location.toLowerCase().includes(lowercaseFilters.location)
        );
      }

      // Filter by equipment
      if (lowercaseFilters.equipment.length > 0) {
        filteredItems = filteredItems.filter(item =>
          lowercaseFilters.equipment.every(
            equipment => item[equipment] === true
          )
        );
      }

      // Filter by type (form)
      if (lowercaseFilters.type) {
        filteredItems = filteredItems.filter(
          item => item.form.toLowerCase() === lowercaseFilters.type
        );
      }

      return filteredItems;
    } catch (error) {
      console.error('Error fetching campers:', error);
      throw error;
    }
  },

  getCamperById: async id => {
    try {
      const response = await axios.get(`${BASE_URL}/campers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching camper with id ${id}:`, error);
      throw error;
    }
  },

  getCamperDetails: async id => {
    try {
      const response = await axios.get(`${BASE_URL}/campers/${id}`);
      const camper = response.data;

      const details = {
        form: camper.form,
        length: camper.length,
        width: camper.width,
        height: camper.height,
        tank: camper.tank,
        consumption: camper.consumption,
      };

      const features = {
        AC: camper.AC,
        bathroom: camper.bathroom,
        kitchen: camper.kitchen,
        TV: camper.TV,
        radio: camper.radio,
        refrigerator: camper.refrigerator,
        microwave: camper.microwave,
        gas: camper.gas,
        water: camper.water,
      };

      return { details, features };
    } catch (error) {
      console.error(`Error fetching camper details with id ${id}:`, error);
      throw error;
    }
  },

  getCamperReviews: async id => {
    try {
      const response = await axios.get(`${BASE_URL}/campers/${id}`);
      const reviews = response.data.reviews;

      return reviews;
    } catch (error) {
      console.error(`Error fetching camper reviews with id ${id}:`, error);
      throw error;
    }
  },
};
