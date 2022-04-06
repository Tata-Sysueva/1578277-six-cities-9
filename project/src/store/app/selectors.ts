import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getCityName = (state: State): string => state[NameSpace.App].city;
export const getSortType = (state: State): string => state[NameSpace.App].sortType;
export const getPostSuccess = (state: State): boolean => state[NameSpace.App].isPostSuccess;
