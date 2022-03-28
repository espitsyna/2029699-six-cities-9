import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOffers } from './data/data';
import { setAuth } from './user/user';
import { store } from './index';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { AuthData, AuthStatus } from '../types/auth';
import { dropToken, saveToken, dropEmail, saveEmail } from '../services/storage';
import { handleError } from '../services/error';

export const fetchOffersAction = createAsyncThunk('data/fetchOffers', async (_, thunkAPI) => {
  try {
    const { data } = await (thunkAPI.extra as AxiosInstance).get(ApiRoute.offers);
    store.dispatch(loadOffers({ offers: data }));
  } catch (error) {
    store.dispatch(loadOffers({ offers: [] }));
    handleError(error);
  }
});

export const checkAuthAction = createAsyncThunk('user/checkAuth', async (_, thunkAPI) => {
  try {
    await (thunkAPI.extra as AxiosInstance).get(ApiRoute.login);
    store.dispatch(setAuth({ auth: AuthStatus.auth }));
  } catch (error) {
    store.dispatch(setAuth({ auth: AuthStatus.noAuth }));
    if ((error as AxiosError).response?.status === 401) {
      return;
    }
    handleError(error);
  }
});

export const loginAction = createAsyncThunk('user/loginAction', async (data: AuthData, thunkAPI) => {
  try {
    const { data: { token, email } } = await (thunkAPI.extra as AxiosInstance).post(ApiRoute.login, data);
    saveToken(token);
    saveEmail(email);
    store.dispatch(setAuth({ auth: AuthStatus.auth }));
  } catch (error) {
    store.dispatch(setAuth({ auth: AuthStatus.noAuth }));
    handleError(error);
  }
});

export const logoutAction = createAsyncThunk('user/logoutAction', async (_, thunkAPI) => {
  try {
    await (thunkAPI.extra as AxiosInstance).delete(ApiRoute.logout);
    dropToken();
    dropEmail();
    store.dispatch(setAuth({ auth: AuthStatus.noAuth }));
  } catch (error) {
    handleError(error);
  }
});

