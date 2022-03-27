import { combineReducers } from '@reduxjs/toolkit';
import { data } from './data/data';
import { user } from './user/user';

export const reducer = combineReducers({
  data: data.reducer,
  user: user.reducer,
});
