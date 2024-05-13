import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    plusCount(state) {
      state.count += 1
    },
    minusCount(state) {
      state.count = state.count - 1;
    },
    setCount(state, action) {
      state.count = action.payload.count;
    },
  },
});

export default infoSlice;