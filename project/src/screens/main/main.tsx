import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import pluralize from 'pluralize';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {changeCity} from '../../store/action';

function Main(): JSX.Element {
  const cityName = useAppSelector((state) => state.city);
  const offersInCurrentCity = useAppSelector((state) => state.offers);
  const countOffers = offersInCurrentCity.length;
  const isEmpty = countOffers <=0;

  const [id, setOffersId] = useState(0);

  const handleMouseEnter = (newId: number) => setOffersId(newId);

  const handleCityClick = (city: string) => {
    store.dispatch(changeCity(city));
  };

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Locations cityName={cityName} onCityClick={handleCityClick} />

        <div className="cities">
          <div className={`cities__places-container container ${isEmpty && 'cities__places-container--empty'}`}>
            {isEmpty ?
              <MainEmpty city={cityName} /> :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {`${countOffers}  ${pluralize('place', countOffers)} to stay in ${offersInCurrentCity[0].city.name}`}
                </b>

                <Sort />

                <CardList
                  offers={offersInCurrentCity}
                  onCardHover={handleMouseEnter}
                />

              </section>}

            <div className="cities__right-section">

              {!isEmpty &&
                <Map
                  className="cities__map"
                  offersInCurrentCity = {offersInCurrentCity}
                  currentId={id}
                />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
