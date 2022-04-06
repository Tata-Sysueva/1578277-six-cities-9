import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {NameSpace} from '../../const';
import {ReviewType} from '../../types/review-type';
import {UserInfo} from '../../types/user-info';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isLoadedStatus;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.Data].reviews;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favorites;
export const getOffersNear = (state: State): Offer[] => state[NameSpace.Data].offersNear;
export const getIsDataOfferLoaded = (state: State): boolean => state[NameSpace.Data].isDataOfferLoaded;
export const getUser = (state: State): UserInfo | null => state[NameSpace.Data].user;
export const getFavoriteStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteStatus;
