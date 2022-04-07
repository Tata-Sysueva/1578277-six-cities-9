import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types/offer';
import {ReviewType} from '../../types/review-type';
import {UserInfo} from '../../types/user-info';

type Data = {
  offers: Offer[],
  offer: Offer | null,
  isLoadedStatus: boolean,
  offersNear: Offer[],
  reviews: ReviewType[],
  isDataOfferLoaded: boolean,
  favorites: Offer [],
  user: UserInfo | null,
  isFavoriteStatus: boolean,
  isFavoritesLoaded: boolean,
};

const initialState: Data = {
  offers: [],
  isLoadedStatus: false,
  offer: null,
  offersNear: [],
  reviews: [],
  isDataOfferLoaded: false,
  favorites: [],
  user: null,
  isFavoriteStatus: false,
  isFavoritesLoaded: false,
};

export const data = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isLoadedStatus = true;
    },
    loadOffer: (state, action) => {
      state.offer = action.payload;
      state.isDataOfferLoaded = true;
    },
    loadOffersNear: (state, action) => {
      state.offersNear = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    loadFavoriteOffers: (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesLoaded = true;
    },
    loadUserInfo: (state, action) => {
      state.user = action.payload;
    },
    changeFavorite: (state, action) => {
      const indexOffer = state.offers.findIndex((offer) => offer.id === action.payload.id);
      const indexOfferNear = state.offersNear.findIndex((offer) => offer.id === action.payload.id);

      if (indexOffer !== -1) {
        state.offers[indexOffer].isFavorite = !state.offers[indexOffer].isFavorite;
      }

      if(state.offer && state.offer.id === action.payload.id) {
        state.offer.isFavorite = !state.offer.isFavorite;
      }

      if (indexOfferNear !== -1) {
        state.offersNear[indexOfferNear].isFavorite = !state.offersNear[indexOfferNear].isFavorite;
      }

      state.isFavoriteStatus = action.payload;
    },
  },
});

export const {
  loadOffers,
  loadOffer,
  loadOffersNear,
  loadReviews,
  loadFavoriteOffers,
  loadUserInfo,
  changeFavorite,
} = data.actions;
