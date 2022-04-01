import {Offer} from './offer';
import {UserInfo} from './userInfo';
import {ReviewType} from './review-type';
import {CommentInfo} from './comment';

export type InitialState = {
  city: string,
  offers: Offer[],
  sortType: string,
  isDataLoaded: boolean,
  authorizationStatus: string,
  user: UserInfo,
  offer: Offer | null,
  offersNear: Offer[],
  reviews: ReviewType[],
  isDataOfferLoaded: boolean,
  commentInfo: CommentInfo,
};
