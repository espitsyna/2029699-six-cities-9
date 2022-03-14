import { createReducer } from '@reduxjs/toolkit';
import { selectCity, loadOffers } from './action';
import { City } from '../const';
import { Offer } from '../types/offer';

const initialState = {
  city: City.Paris,
  offers: [] as Offer[],
  loading: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, { payload: { city } }) => {
      state.city = city;
    })
    .addCase(loadOffers, (state, { payload: { offers } }) => {
      state.offers = offers;
      state.loading = false;
    });
});
