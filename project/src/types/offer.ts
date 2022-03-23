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

export type NewReview = {
  comment: string,
  rating: number,
};

export type Review = NewReview & {
  date: string,
  id: number,
  user: User,
};

type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type City = {
  location: Location,
  name: string,
};

export type Offer = Card & {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: User,
  images: string[],
  location: Location,
  maxAdults: number,
};
