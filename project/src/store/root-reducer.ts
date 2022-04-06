import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {data} from './data/data';
import {app} from './app/app';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: data.reducer,
  [NameSpace.App]: app.reducer,
  [NameSpace.User]: userProcess.reducer,
});
