import {LoadData} from '../../types/state';
import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';

const initialState: LoadData = {
  offers: [],
  isDataLoaded: false,
  offer: null,
  offersNear: [],
  reviews: [],
  isDataOfferLoaded: false,
};

export const loadData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
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

export const {loadOffers, loadOffer, loadOffersNear, loadReviews} = loadData.actions;
