export const OFFERS_FROM = 0;
export const OFFERS_TO = 3;
export const TIMEOUT_SHOW_ERROR = 5000;

export const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const COPYRIGHT_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-z])/i;
export const EMAIL_PATTERN = /^[A-Za-z0-9][A-Za-z0-9-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/;

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

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

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

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const SortTypes = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
};

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Offer = '/hotels/',
  Comments = '/comments/',
  Favorites = '/favorite',
}

export const HTTP_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export enum Messages {
  LoggedIn = 'You have successfully logged in!',
  EmailError = 'Invalid email. You need email like example@example.com',
  PasswordError = 'Invalid password. You need letters and numbers',
  AddComment = 'You have successfully added comment'
}

export enum NameSpace {
  Data = 'DATA',
  UseSite = 'USE_SITE',
  User = 'USER',
}
