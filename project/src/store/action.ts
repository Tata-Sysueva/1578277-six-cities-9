import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({payload: city}));
