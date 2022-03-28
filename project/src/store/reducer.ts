import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, loadOffers, setError} from './action';
import {Cities, SortTypes} from '../const';
import {Offer} from '../types/offer';

type InitialState = {
  city: string,
  offers: Offer[],
  sortType: string,
  error: string,
  isDataLoaded: boolean,
};


const initialState: InitialState = {
  city: Cities.Paris,
  offers: [],
  sortType: SortTypes.Popular,
  error: '',
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
