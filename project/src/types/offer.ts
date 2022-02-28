export type Accommodation = 'apartment' | 'room' | 'house' | 'hotel';

type User = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type Card = {
  id: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: Accommodation,
  isFavorite: boolean,
  isPremium: boolean,
};

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
};

export type Offer = Card & {
  bedrooms: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string
  },
  description: string,
  goods: string[],
  host: User,
  images: string[],
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  maxAdults: number,
};
