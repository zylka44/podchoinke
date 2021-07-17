import { createSlice } from '@reduxjs/toolkit';

export const signin = createSlice({
  name: 'signin',
  initialState: {
    offset: false,
  },
  reducers: {
    updateOffset: (state, action) => {
      state.offset = action.payload;
    },
  },
});

export const { updateOffset } = signin.actions;
