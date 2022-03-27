import { createSlice } from '@reduxjs/toolkit';
import { City } from '../../const';
import { Offer } from '../../types/offer';

const initialState = {
  city: City.Paris,
  offers: [] as Offer[],
  loading: true,
};

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    selectCity: (state, { payload: { city } }) => {
      state.city = city;
    },
    loadOffers: (state, { payload: { offers } }) => {
      state.offers = offers;
      state.loading = false;
    },
  },
});

export const { selectCity, loadOffers } = data.actions;
