import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from '../../types/auth';

const initialState = {
  authStatus: AuthStatus.undefined,
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
