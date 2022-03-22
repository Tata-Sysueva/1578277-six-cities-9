import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import {offers} from '../mocks/offers';

const getOffersInCurrentCity = (city: string) => offers.filter((offer) => offer.city.name === city);

const initialState = {
  city: 'Paris',
  offers: getOffersInCurrentCity('Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getOffersInCurrentCity(action.payload);
    });
});

export {reducer};
