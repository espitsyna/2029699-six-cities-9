import { createReducer } from '@reduxjs/toolkit';
import { selectCity } from './action';
import { City } from '../const';
import { offers } from '../mocks/offers';

const initialState = {
  city: City.Paris,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, { payload: { city } }) => {
      state.city = city;
    });
});
