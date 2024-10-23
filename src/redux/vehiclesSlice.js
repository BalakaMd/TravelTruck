import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get('/api/vehicles', { params: filters });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearVehicles: state => {
      state.list = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchVehicles.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearVehicles } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
