import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
