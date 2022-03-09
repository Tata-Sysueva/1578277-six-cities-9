import {Offer} from '../../types/offer';
import Card from '../card/card';

type FavoritesLocationProps = {
  city: string,
  offers: Offer[],
}

function FavoritesLocation ({city, offers}: FavoritesLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            className="favorites__card"
            classNameWrap="favorites__image-wrapper"
            classNameInfo="favorites__card-info"
            isSmall
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocation;
