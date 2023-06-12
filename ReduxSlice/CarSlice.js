import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carname: null,
  carimg: null,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCarname: (state, action) => {
      state.carname = action.payload;
    },
    setCarimg: (state, action) => {
      state.carimg = action.payload;
    },
  },
});

export const { setCarname, setCarimg } = carSlice.actions;

// selectors

export const selectCarname = (state) => state.car.carname;
export const selectCarimg = (state) => state.car.carimg;

export default carSlice.reducer;
