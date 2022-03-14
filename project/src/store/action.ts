import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';
import { Offer } from '../types/offer';

export const selectCity = createAction<{ city: City }>('selectCity');

export const loadOffers = createAction<{ offers: Offer[] }>('loadOffers');
