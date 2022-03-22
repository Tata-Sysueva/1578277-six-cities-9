import Card from '../card/card';
import {Offer} from '../../types/offer';

type CardListProps = {
  offers: Offer[];
  onCardHover?: (id: number) => void;
}

function CardList ({offers, onCardHover}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer: Offer) => (
          <Card
            key={offer.id}
            offer={offer}
            className="cities__place-card"
            onCardHover={onCardHover}
          />
        ))
      }
    </div>
  );
}

export default CardList;
