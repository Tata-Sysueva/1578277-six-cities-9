import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {UserInfo} from './userInfo';
import {Offer} from './offer';
import {ReviewType} from './review-type';
import {CommentInfo} from './comment';

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserInfo,
};

export type LoadData = {
  offers: Offer[],
  offer: Offer | null,
  isDataLoaded: boolean,
  offersNear: Offer[],
  reviews: ReviewType[],
  isDataOfferLoaded: boolean,
};

export type UseSite = {
  city: string,
  sortType: string,
  commentInfo: CommentInfo,
}

export type State = ReturnType<typeof store.getState>;
