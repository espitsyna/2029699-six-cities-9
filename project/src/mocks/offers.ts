import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Wi-Fi', 'Heating', 'Washing machine', 'Cabel TV', 'Baby seat', 'Towels', 'Kitchen', 'Fridge', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['apartment-03.jpg', 'studio-01.jpg', 'apartment-01.jpg', 'room.jpg', 'apartment-01.jpg', 'apartment-02.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    maxAdults: 4,
    previewImage: 'apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Wi-Fi'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Sue',
    },
    id: 2,
    images: ['room.jpg', 'apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'studio-01.jpg', 'apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    maxAdults: 2,
    previewImage: 'room.jpg',
    price: 80,
    rating: 4.2,
    title: 'Wood and stone place',
    type: 'room',
  }, {
    bedrooms: 2,
    city: {
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Cabel TV', 'Baby seat', 'Towels', 'Kitchen', 'Wi-Fi', 'Heating', 'Washing machine'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 3,
    images: ['apartment-03.jpg', 'studio-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    maxAdults: 5,
    previewImage: 'apartment-03.jpg',
    price: 180,
    rating: 4.6,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      name: 'Cologne',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Baby seat', 'Towels', 'Fridge', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'Felix',
    },
    id: 4,
    images: ['apartment-01.jpg', 'room.jpg', 'apartment-01.jpg', 'apartment-02.jpg', 'room.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    maxAdults: 3,
    previewImage: 'apartment-02.jpg',
    price: 132,
    rating: 3.9,
    title: 'Canal View Prinsengracht',
    type: 'hotel',
  },
];
