import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    findNannies(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { findNannies } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
