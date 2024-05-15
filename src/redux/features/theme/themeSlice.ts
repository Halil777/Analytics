import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the state
interface CustomColors {
  background: string;
  text: string;
  active: string;
  passive: string;
}

interface ThemeState {
  mode: 'light' | 'dark' | 'custom';
  customColors: CustomColors;
}

// Define the initial state
const initialState: ThemeState = {
  mode: 'light',
  customColors: {
    background: '#ffffff',
    text: '#000000',
    active: '#007bff',
    passive: '#f8f9fa',
  },
};
// Create the slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightMode: (state) => {
      state.mode = 'light';
    },
    setDarkMode: (state) => {
      state.mode = 'dark';
    },
    setCustomMode: (state, action: PayloadAction<CustomColors>) => {
      state.mode = 'custom';
      state.customColors = action.payload;
    },
  },
});

// Export the actions and reducer
export const { setLightMode, setDarkMode, setCustomMode } = themeSlice.actions;
export default themeSlice.reducer;
