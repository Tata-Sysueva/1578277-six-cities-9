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
