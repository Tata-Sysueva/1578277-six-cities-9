import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));

export const changeSortType = createAction('changeSortType', (sortType) => ({payload: sortType}));

export const loadOffers = createAction('loadOffers', (data) => ({payload: data}));

//export const loadOfferId = createAction('loadOfferId', (data) => ({payload: data}));

export const setError = createAction<string>('setError');
