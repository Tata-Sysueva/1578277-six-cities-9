import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'April 2019',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver',
    },
  },
  {
    comment: 'Best place',
    date: 'April 2021',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'Max',
    },
  },
  {
    comment: 'Good',
    date: 'May 2019',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina',
    },
  },
  {
    comment: 'Awful',
    date: 'January 2022',
    id: 4,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Peter',
    },
  },
];
