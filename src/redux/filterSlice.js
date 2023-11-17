import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { createFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
