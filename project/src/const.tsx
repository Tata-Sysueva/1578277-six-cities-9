export const OFFERS_FROM = 0;
export const OFFERS_TO = 3;

export const RATING_TYPES = [
  {
    title: 'perfect',
    stars: 5,
  },
  {
    title: 'good',
    stars: 4,
  },
  {
    title: 'not bad',
    stars: 3,
  },
  {
    title: 'badly',
    stars: 2,
  },
  {
    title: 'terribly',
    stars: 1,
  },
];

export const CITIES = {
  AMSTERDAM: 'Amsterdam',
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
