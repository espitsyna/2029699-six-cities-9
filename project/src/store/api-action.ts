import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOffers } from './action';
import { store } from './index';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';

export const fetchOffersAction = createAsyncThunk('fetchOffers', async (_, thunkAPI) => {
  const { data } = await (thunkAPI.extra as AxiosInstance).get(ApiRoute.offers);
  store.dispatch(loadOffers({ offers: data }));
});

