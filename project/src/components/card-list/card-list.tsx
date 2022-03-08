import Card from '../card/card';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type CardListProps = {
  offers: Offer[];
}

function CardList ({offers}: CardListProps): JSX.Element {
  const [, setOffersId] = useState(0);

  const handleMouseEnter = (newId: number) => setOffersId(newId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer: Offer) => (
          <Card
            key={offer.id}
            offer={offer}
            className="cities__place-card"
            onCardHover={handleMouseEnter}
          />
        ))
      };
    </div>
  );
}

export default CardList;
