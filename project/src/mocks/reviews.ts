import { Review } from '../types/offer';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'June 2019',
    id: 1,
    rating: 4.1,
    user: {
      avatarUrl: 'avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Sam',
    },
  }, {
    comment: 'Totally recommend.',
    date: 'May 2021',
    id: 2,
    rating: 4.9,
    user: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Jane',
    },
  }, {
    comment: 'Your best choice!',
    date: 'February 2021',
    id: 3,
    rating: 4.7,
    user: {
      avatarUrl: 'avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'Andrew',
    },
  },
];
