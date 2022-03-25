import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from './action';
import {Cities, SortTypes} from '../const';
import {offers} from '../mocks/offers';

const initialState = {
  city: Cities.Paris,
  offers: offers,
  sortType: SortTypes.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
