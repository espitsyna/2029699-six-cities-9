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
    setFavorite: (state, { payload: { id, isFavorite } }) => {
      const index = state.offers.findIndex((offer) => offer.id ===id);
      if (-1 !== index) {
        state.offers[index].isFavorite = isFavorite;
      }
    },
  },
});

export const { selectCity, loadOffers, setFavorite } = data.actions;
