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
