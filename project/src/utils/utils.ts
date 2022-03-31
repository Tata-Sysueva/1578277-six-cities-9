import {Offer} from '../types/offer';
import {AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {toast} from 'react-toastify';

export const getRatingPercent = (rating: number): number =>  Math.round((rating * 100)/5);

export const mapOffersToCities = (offers: Offer[]) =>
  offers.reduce<{[key: string]: Offer[]}>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);

    return  acc;
  }, {});

export const SortHighToLow = (a: Offer, b: Offer) => a.price - b.price;
export const SortLowToHigh = (a: Offer, b: Offer) => b.price - a.price;
export const SortTopRated = (a: Offer, b: Offer) => b.rating - a.rating;

export const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const uppercaseFirstLetter = (phrase: string) => phrase.slice(0,1).toUpperCase() + phrase.slice(1);

export const toastConfig = () => {
  toast.configure({
    position: toast.POSITION.TOP_CENTER,
    autoClose: TIMEOUT_SHOW_ERROR,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
