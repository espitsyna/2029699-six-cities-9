import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';
import { Offer } from '../types/offer';

export const selectCity = createAction<{ city: City }>('data/selectCity');

export const loadOffers = createAction<{ offers: Offer[] }>('data/loadOffers');

export const setAuth = createAction<{ auth: boolean }>('user/setAuth');
