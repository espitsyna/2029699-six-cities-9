export type Accommodation = 'apartment' | 'room' | 'house' | 'hotel';

type Host = {
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
  isFavourite: boolean,
  isPremium: boolean,
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
  host: Host,
  images: string[],
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  maxAdults: number,
};
