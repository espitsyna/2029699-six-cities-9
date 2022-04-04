import { Accommodation } from '../types/offer';
import { City } from '../const';

export const offers = [
  {
    id: 1,
    previewImage: 'previewImage',
    price: 10,
    rating: 3,
    title: 'title',
    type: Accommodation.apartment,
    isFavorite: false,
    isPremium: false,
    bedrooms: 1,
    city: {
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      name: City.Amsterdam,
    },
    description: 'Description',
    goods: ['One', 'Two'],
    host: {
      avatarUrl: 'avatarUrl',
      id: 1,
      isPro: true,
      name: 'Name',
    },
    images: ['img1', 'img2'],
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    maxAdults: 2,
  }, {
    id: 2,
    previewImage: 'previewImage',
    price: 100,
    rating: 4,
    title: 'title',
    type: Accommodation.hotel,
    isFavorite: true,
    isPremium: true,
    bedrooms: 4,
    city: {
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      name: City.Dusseldorf,
    },
    description: 'Description',
    goods: ['One'],
    host: {
      avatarUrl: 'avatarUrl',
      id: 2,
      isPro: false,
      name: 'Name',
    },
    images: ['img1', 'img2'],
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    maxAdults: 3,
  },
];

export const authData = {
  email: 'email@test.com',
  password: 'pass123',
};

export const review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: 'Mon Apr 04 2022 00:36:42 GMT+0200 (Central European Summer Time)',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/1.png',
    id: 1,
    isPro: false,
    name: 'name',
  },
};

export const updateFavoriteData = {
  id: 1,
  isFavorite: true,
};
