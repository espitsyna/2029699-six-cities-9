import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOffers } from './data/data';
import { setAuth } from './user/user';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { AuthData, AuthStatus } from '../types/auth';
import { dropToken, saveToken, dropEmail, saveEmail } from '../services/storage';
import { handleError } from '../services/error';

export const fetchOffersAction = createAsyncThunk('data/fetchOffers', async (_, { dispatch, extra }) => {
  try {
    const { data } = await (extra as AxiosInstance).get(ApiRoute.offers);
    dispatch(loadOffers({ offers: data }));
  } catch (error) {
    dispatch(loadOffers({ offers: [] }));
    handleError(error);
  }
});

export const checkAuthAction = createAsyncThunk('user/checkAuth', async (_, { dispatch, extra }) => {
  try {
    await (extra as AxiosInstance).get(ApiRoute.login);
    dispatch(setAuth({ auth: AuthStatus.auth }));
  } catch (error) {
    dispatch(setAuth({ auth: AuthStatus.noAuth }));
    if ((error as AxiosError).response?.status === 401) {
      return;
    }
    handleError(error);
  }
});

export const loginAction = createAsyncThunk('user/loginAction', async (data: AuthData, { dispatch, extra }) => {
  try {
    const { data: { token, email } } = await (extra as AxiosInstance).post(ApiRoute.login, data);
    saveToken(token);
    saveEmail(email);
    dispatch(setAuth({ auth: AuthStatus.auth }));
  } catch (error) {
    dispatch(setAuth({ auth: AuthStatus.noAuth }));
    handleError(error);
  }
});

export const logoutAction = createAsyncThunk('user/logoutAction', async (_, { dispatch, extra }) => {
  try {
    await (extra as AxiosInstance).delete(ApiRoute.logout);
    dropToken();
    dropEmail();
    dispatch(setAuth({ auth: AuthStatus.noAuth }));
  } catch (error) {
    handleError(error);
  }
});

