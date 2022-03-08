import {Offer} from '../types/offer';

export const getRatingPercent = (rating: number): number => (rating * 100)/5;

export const getFavoriteOffers = (offers: Offer[]) => {
  const favoriteOffers: Offer[] = [];

  offers.forEach((offer) => {
    if (offer.isFavorite) {
      favoriteOffers.push(offer);
    }
  });
  return favoriteOffers;
};

export const getSortOffers = (offers: Offer[]) =>
  offers.reduce<{[key: string]: Offer[]}>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);

    return  acc;
  }, {});
