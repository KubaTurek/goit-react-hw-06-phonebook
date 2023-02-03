import { createSlice } from '@reduxjs/toolkit';

const FiltersInitialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: FiltersInitialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = state => state.filter;

export const filterReducer = filterSlice.reducer;
