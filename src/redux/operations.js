import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from '../api';

export const fetchCampers = createAsyncThunk(
  'vehicles/fetchCampers',
  async (filters, thunkAPI) => {
    try {
      const response = await campersApi.getAllCampers(filters);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
