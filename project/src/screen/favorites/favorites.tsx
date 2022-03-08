import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Offer} from '../../types/offer';
import {getFavoriteOffers, getSortOffers} from '../../utils/utils';
import FavoritesLocation from '../../components/favorites-location/favorites-location';

type FavoritesProps = {
  offers: Offer[],
}

function Favorites ({offers}: FavoritesProps): JSX.Element {
  const favoriteOffers = getFavoriteOffers(offers);
  const sortFavoriteOffers = Object.entries(getSortOffers(favoriteOffers));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {sortFavoriteOffers.map(([cityName, offersInfo]) => (
                <FavoritesLocation
                  key={cityName}
                  city={cityName}
                  offers={offersInfo}
                />),
              )}
            </ul>
          </section>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default Favorites;
