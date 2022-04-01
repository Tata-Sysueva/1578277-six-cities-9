import {createReducer} from '@reduxjs/toolkit';
import {
  addComment,
  changeCity,
  changeSortType,
  changeUser,
  loadOffer,
  loadOffers,
  loadOffersNear,
  loadReviews,
  requireAuthorization
} from './action';
import {AuthorizationStatus, Cities, SortTypes} from '../const';
import {InitialState} from '../types/InitialState';

const initialState: InitialState = {
  city: Cities.Paris,
  offers: [],
  sortType: SortTypes.Popular,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
  },
  offer: null,
  offersNear: [],
  reviews: [],
  isDataOfferLoaded: false,
  commentInfo: {
    comment: '',
    rating: 0,
    id: 0,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isDataOfferLoaded = true;
    })
    .addCase(loadOffersNear, (state, action) => {
      state.offersNear = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.commentInfo = action.payload;
    });
});

export {reducer};
