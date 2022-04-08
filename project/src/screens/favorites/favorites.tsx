import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {mapOffersToCities} from '../../utils/utils';
import FavoritesLocation from '../../components/favorites-location/favorites-location';
import FavoritesListEmpty from '../../components/favorites-list-empty/favorites-list-empty';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteOffers, getFavoritesLoaded} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {fetchFavoriteOffers} from '../../store/api-actions';
import {useEffect} from 'react';
import {getFavoriteStatus} from '../../store/data/selectors';
import Loading from '../../components/loading/loading';
import {ZERO} from '../../const';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavoriteStatus = useAppSelector(getFavoriteStatus);
  const isFavoritesLoaded = useAppSelector(getFavoritesLoaded);

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch, isFavoriteStatus]);

  if (!favoriteOffers || !isFavoritesLoaded) {
    return <Loading />;
  }

  const isEmpty = favoriteOffers.length <= ZERO;
  const groupFavoriteOffers = Object.entries(mapOffersToCities(favoriteOffers));

  return (
    <div className={`page ${isEmpty && 'page--favorites-empty'}`}>
      <Header authorizationStatus={authorizationStatus}/>

      <main className={`page__main page__main--favorites ${isEmpty && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {isEmpty ?
            <FavoritesListEmpty /> :

            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {groupFavoriteOffers.map(([cityName, offersInfo]) => (
                  <FavoritesLocation
                    key={cityName}
                    city={cityName}
                    offers={offersInfo}
                  />),
                )}
              </ul>
            </section>}
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default Favorites;
