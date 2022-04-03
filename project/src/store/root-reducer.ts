import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {loadData} from './load-data/load-data';
import {useSite} from './use-site/use-site';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: loadData.reducer,
  [NameSpace.UseSite]: useSite.reducer,
  [NameSpace.User]: userProcess.reducer,
});
