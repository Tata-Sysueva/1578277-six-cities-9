import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from './action';
import {CITIES, SORT_TYPE} from '../const';
import {offers} from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: offers,
  sortType: SORT_TYPE[0],
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
