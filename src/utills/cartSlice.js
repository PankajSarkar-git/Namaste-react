import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state , action) => {
      state.items.splice(action.payload , 1);
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});

export const {addItems, removeItem,clearcart} = cartSlice.actions;

export default cartSlice.reducer;