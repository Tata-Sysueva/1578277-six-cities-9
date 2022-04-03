import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getCityName = (state: State): string => state[NameSpace.UseSite].city;
export const getSortType = (state: State): string => state[NameSpace.UseSite].sortType;
