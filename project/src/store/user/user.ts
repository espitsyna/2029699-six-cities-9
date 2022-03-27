import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authStatus: false,

};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, { payload: { auth } }) => {
      state.authStatus = auth;
    },
  },
});

export const { setAuth } = user.actions;
