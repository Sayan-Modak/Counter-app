import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  initialState: 0,
  name: 'counter',
  reducers: {
    increment: (state) => state += 10,
    decrement: (state) => state -= 5,
    reset: (state) => state *= 0,
  }
})

// Exporting the actions
export const { increment, decrement, reset } = counterSlice.actions;
// Exporting the reducer
export default counterSlice.reducer;