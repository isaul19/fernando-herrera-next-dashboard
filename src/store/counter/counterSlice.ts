import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCountState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    incrementCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },

    decrementCount(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },

    updateCountBy(state, action) {
      state.count = action.payload;
    },
  },
});

export const { decrementCount, incrementCount, updateCountBy, initCountState } =
  counterSlice.actions;

export default counterSlice.reducer;
