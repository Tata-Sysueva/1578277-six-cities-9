import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));

export const changeSortType = createAction('changeSortType', (sortType) => ({payload: sortType}));

export const loadOffers = createAction('loadOffers', (data) => ({payload: data}));

//export const loadOfferId = createAction('loadOfferId', (data) => ({payload: data}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
