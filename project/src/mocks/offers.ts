import {Offer} from '../types/offer';

export const offers: Offer[]  = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine',
      'Towels',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 520,
    rating: 4.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 51.370216,
        longitude: 3.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Vera',
    },
    id: 2,
    images: [
      'img/apartment-02.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496375,
      longitude: 4.673877537499945,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/2.png',
    price: 100,
    rating: 3.8,
    title: 'Wood and stone place',
    type: 'Apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.370216,
        longitude: 2.895168,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Marina',
    },
    id: 5,
    images: [
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938896378,
      longitude: 4.673877532499948,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/5.png',
    price: 20,
    rating: 1.8,
    title: 'Beautiful location',
    type: 'Apartment',
  },
  {
    bedrooms: 10,
    city: {
      location: {
        latitude: 52.37021,
        longitude: 4.89516,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 10,
      isPro: true,
      name: 'Max',
    },
    id: 6,
    images: [
      'img/apartment-small-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.355149396378,
      longitude: 4.6738775379948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/10.png',
    price: 125,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
];
