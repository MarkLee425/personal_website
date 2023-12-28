import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ICounterState {
  value: number;
}

// Define the initial state using that type
const initialState: ICounterState = {
  value: 2,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { decrement } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;
