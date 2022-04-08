import {Offer} from '../types/offer';
import {AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {toast} from 'react-toastify';
import {ReviewType} from '../types/review-type';
import dayjs from 'dayjs';

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

export const sortedReviews = (reviewsArray:ReviewType[]) => {
  const copiedReviews = reviewsArray.slice();

  if(copiedReviews.length > 0){
    copiedReviews.sort((a,b) => +dayjs(b.date) - +dayjs(a.date));
  }

  return copiedReviews;
};

const getInteger = (min: number, max: number) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayElement = (elements: string[]) => elements[getInteger(0, elements.length - 1)];
