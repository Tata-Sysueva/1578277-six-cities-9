import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));

export const changeSortType = createAction('changeSortType', (sortType) => ({payload: sortType}));

export const loadOffers = createAction('loadOffers', (data) => ({payload: data}));

export const loadOffer = createAction('loadOffer', (data) => ({payload: data}));

export const loadOffersNear = createAction('loadOffersNear', (data) => ({payload: data}));

export const loadReviews = createAction('loadReviews', (data) => ({payload: data}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const changeUser = createAction('user/getUserInfo', (data) => ({payload: data}));

export const addComment = createAction('addComment', (data) => ({payload: data}));
