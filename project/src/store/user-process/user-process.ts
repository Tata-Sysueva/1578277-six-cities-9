import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
  },
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    changeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, changeUser} = userProcess.actions;
