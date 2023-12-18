import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IThemeState {
  value: TTheme;
}

// Define the initial state using that type
const initialState: IThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    switchThemeMode: (state) => {
      state.value = state.value == "light" ? "dark" : "light";
    },
  },
});

export const { switchThemeMode } = themeSlice.actions;

export const themeSliceReducer = themeSlice.reducer;
