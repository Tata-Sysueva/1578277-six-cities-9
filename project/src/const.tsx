export const FROM = 0;
export const ZERO = 0;
export const OFFERS_TO = 3;
export const REVIEWS_TO = 10;
export const IMG_TO = 6;

export const TIMEOUT_SHOW_ERROR = 5000;

export const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const COPYRIGHT_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const PATTERNS = {
  PASSWORD_PATTERN: /^(?=.*[0-9])(?=.*[a-z])/i,
  EMAIL_PATTERN: /^[A-Za-z0-9][A-Za-z0-9-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/,
};

export const HTTP_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

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

export enum ReviewValues {
  MaxLength = 300,
  MinLength = 50,
  MinRating = 1,
}

export enum Markers {
  DefaultUrl= 'img/pin.svg',
  CurrentUrl = 'img/pin-active.svg',
}

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

export enum SortTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels/',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Favorites = '/favorite/',
}

export enum Messages {
  LoggedIn = 'You have successfully logged in!',
  EmailError = 'Invalid email. You need email like example@example.com',
  PasswordError = 'Invalid password. You need letters and numbers',
  AddComment = 'You have successfully added comment'
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export enum ApiAction {
  FetchOffers = 'data/fetchOffers',
  FetchOffer = 'data/fetchOffer',
  FetchOffersNear = 'data/fetchOffersNear',
  FetchReviews = 'data/fetchReviews',
  FetchFavoriteOffers = 'data/fetchFavoriteOffers',
  UserCheckAuth = 'user/checkAuth',
  UserLogin = 'user/login',
  UserLogout = 'user/logout',
  AddComment = 'addComment',
  ChangeFavoriteStatus = 'changeFavoriteStatus',
}

export enum SizesButton {
  WidthIsSmall = '18',
  WidthIsBig = '31',
  HeightIsSmall = '19',
  HeightIsBig = '33',
}

export enum SizesCard {
  WidthIsSmall = '150',
  WidthIsBig = '260',
  HeightIsSmall = '110',
  HeightIsBig = '200',
}
