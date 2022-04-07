import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {ApiAction, APIRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {ReviewType} from '../types/review-type';
import {CommentInfo} from '../types/comment';
import {
  changeFavorite,
  loadFavoriteOffers,
  loadOffer,
  loadOffers,
  loadOffersNear,
  loadReviews,
  loadUserInfo
} from './data/data';
import {requireAuthorization} from './user-process/user-process';
import {addComment, isPostSuccess} from './app/app';
import {FavoriteStatus} from '../types/favorite-status';

export const fetchOffersAction = createAsyncThunk(
  ApiAction.FetchOffers,
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
  ApiAction.FetchOffer,
  async (id:number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOffersNearAction = createAsyncThunk(
  ApiAction.FetchOffersNear,
  async (id:number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}${id}/nearby`);
      store.dispatch(loadOffersNear(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviews = createAsyncThunk(
  ApiAction.FetchReviews,
  async (id:number) => {
    try {
      const {data} = await api.get<ReviewType>(`${APIRoute.Comments}${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffers = createAsyncThunk(
  ApiAction.FetchFavoriteOffers,
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorites);
      store.dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  ApiAction.UserCheckAuth,
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(loadUserInfo(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  ApiAction.UserLogin,
  async ({email: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(loadUserInfo(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  ApiAction.UserLogout,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(loadUserInfo({}));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postCommentsAction = createAsyncThunk(
  ApiAction.AddComment,
  async ({comment: comment, rating, id}: CommentInfo) => {
    try {
      const {data} = await api.post<CommentInfo>(`${APIRoute.Comments}${id}`, {comment, rating});
      store.dispatch(addComment(data));
      store.dispatch(isPostSuccess(true));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const setFavoriteAction = createAsyncThunk(
  ApiAction.ChangeFavoriteStatus,
  async ({cardId, status}: FavoriteStatus) => {
    try {
      const {data} = await api.post<FavoriteStatus>(`${APIRoute.Favorites}${cardId}/${status}`);
      store.dispatch(changeFavorite(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
