import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {APIRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {ReviewType} from '../types/review-type';
import {CommentInfo} from '../types/comment';
import {loadOffer, loadOffers, loadOffersNear, loadReviews} from './load-data/load-data';
import {changeUser, requireAuthorization} from './user-process/user-process';
import {addComment} from './use-site/use-site';

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

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffer',
  async (id:number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offer}${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOffersNearAction = createAsyncThunk(
  'data/fetchOffersNear',
  async (id:number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offer}${id}/nearby`);
      store.dispatch(loadOffersNear(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviews = createAsyncThunk(
  'data/fetchReviews',
  async (id:number) => {
    try {
      const {data} = await api.get<ReviewType>(`${APIRoute.Comments}${id}`);
      store.dispatch(loadReviews(data));
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
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(changeUser(data));
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
      store.dispatch(changeUser({}));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postCommentsAction = createAsyncThunk(
  'addComment',
  async ({comment: comment, rating, id}: CommentInfo) => {
    try {
      const {data} = await api.post<CommentInfo>(`${APIRoute.Comments}${id}`, {comment, rating});
      store.dispatch(addComment(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
