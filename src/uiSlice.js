import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    searchTerm: '',
    isSorted: false,
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    toggleSort(state) {
      state.isSorted = !state.isSorted;
    },
  },
});

export const { setSearchTerm, toggleSort } = uiSlice.actions;
export default uiSlice.reducer;
