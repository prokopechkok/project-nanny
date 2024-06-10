import { createSlice } from '@reduxjs/toolkit';
import { getNannies } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  lastKey: null,
  message: null,
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNannies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (payload.length === 0) {
          state.message = 'No nannies found';
        }
        const idsToCheck = state.items.map((item) => item.id);

        const filteredItems = payload.filter(
          (item) => !idsToCheck.includes(item.id)
        );
        state.items = [...state.items, ...filteredItems];

        if (payload.length > 0) {
          state.lastKey = payload[payload.length - 1].id;
        }
      })
      .addCase(getNannies.pending, handlePending)
      .addCase(getNannies.rejected, handleRejected);
  },
});

export const nanniesReducer = nanniesSlice.reducer;
