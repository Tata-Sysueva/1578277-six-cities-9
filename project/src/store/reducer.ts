import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import {CITIES} from '../const';
import {offers} from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
