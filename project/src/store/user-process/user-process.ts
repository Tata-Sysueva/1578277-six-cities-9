import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserInfo} from '../../types/user-info';

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserInfo | null,
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
