import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';

export const selectCity = createAction<{ city: City }>('selectCity');
