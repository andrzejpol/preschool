import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { main } from "./actions";

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    main,
  },
});

export const actions = mainSlice.actions;

export const reducer = mainSlice.reducer;

export default mainSlice;
