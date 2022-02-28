import {Offer} from '../../types/offer';
import Card from '../card/card';
import {OFFERS_FROM, OFFERS_TO} from '../../const';

type NearPlacesProps = {
  offers: Offer[];
}

export default function NearPlaces ({offers}: NearPlacesProps):JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offers
              .slice(OFFERS_FROM,OFFERS_TO)
              .map((offer: Offer) =>
                <Card
                  key={offer.id}
                  offer={offer}
                  className="near-places__card"
                />
            )
          }
        </div>
      </section>
    </div>);
}
