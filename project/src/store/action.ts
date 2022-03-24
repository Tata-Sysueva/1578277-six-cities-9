import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));

export const changeSortType = createAction('changeSortType', (sortType) => ({payload: sortType}));
