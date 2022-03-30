import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {APIRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {loadOffers, requireAuthorization} from './action';
import {errorHandle} from '../services/error-handle';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropEmail, saveEmail} from '../services/email';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      saveEmail(email);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dropEmail();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

// export const fetchOfferIdAction = createAsyncThunk(
//   'data/fetchOfferId',
//   async () => {
//     try {
//       const {data} = await api.get<Offer[]>(APIRoute.Offers);
//       store.dispatch(loadOfferId(data));
//     } catch (error) {
//       errorHandle(error);
//     }
//   },
// );
