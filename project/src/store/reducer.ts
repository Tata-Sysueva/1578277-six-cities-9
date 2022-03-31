import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, changeUser, loadOffers, requireAuthorization} from './action';
import {AuthorizationStatus, Cities, SortTypes} from '../const';
import {Offer} from '../types/offer';
import {UserInfo} from '../types/userInfo';

type InitialState = {
  city: string,
  offers: Offer[],
  sortType: string,
  isDataLoaded: boolean,
  authorizationStatus: string,
  user: UserInfo,
};


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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
