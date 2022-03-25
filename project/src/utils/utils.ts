import {Offer} from '../types/offer';

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
