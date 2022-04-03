import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {NameSpace} from '../../const';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
