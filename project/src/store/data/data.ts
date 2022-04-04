import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types/offer';
import {ReviewType} from '../../types/review-type';

type Data = {
  offers: Offer[],
  offer: Offer | null,
  isLoadedStatus: boolean,
  offersNear: Offer[],
  reviews: ReviewType[],
  isDataOfferLoaded: boolean,
};

const initialState: Data = {
  offers: [],
  isLoadedStatus: false,
  offer: null,
  offersNear: [],
  reviews: [],
  isDataOfferLoaded: false,
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
  },
});

export const {
  loadOffers,
  loadOffer,
  loadOffersNear,
  loadReviews,
} = data.actions;
