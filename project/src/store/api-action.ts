import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOffers, setAuth } from './action';
import { store } from './index';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { AuthData } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { handleError } from '../services/error';

export const fetchOffersAction = createAsyncThunk('data/fetchOffers', async (_, thunkAPI) => {
  const { data } = await (thunkAPI.extra as AxiosInstance).get(ApiRoute.offers);
  store.dispatch(loadOffers({ offers: data }));
});

export const checkAuthAction = createAsyncThunk('user/checkAuth', async (_, thunkAPI) => {
  try {
    await (thunkAPI.extra as AxiosInstance).get(ApiRoute.login);
    store.dispatch(setAuth({ auth: true }));
  } catch (error) {
    store.dispatch(setAuth({ auth: false }));
    if ((error as AxiosError).response?.status === 401) {
      return;
    }
    handleError(error);
  }
});

export const loginAction = createAsyncThunk('user/loginAction', async (data: AuthData, thunkAPI) => {
  try {
    const { data: { token } } = await (thunkAPI.extra as AxiosInstance).post(ApiRoute.login, data);
    saveToken(token);
    store.dispatch(setAuth({ auth: true }));
  } catch (error) {
    store.dispatch(setAuth({ auth: false }));
    handleError(error);
  }
});

export const logoutAction = createAsyncThunk('user/logoutAction', async (_, thunkAPI) => {
  try {
    await (thunkAPI.extra as AxiosInstance).delete(ApiRoute.logout);
    dropToken();
    store.dispatch(setAuth({ auth: false }));
  } catch (error) {
    handleError(error);
  }
});

