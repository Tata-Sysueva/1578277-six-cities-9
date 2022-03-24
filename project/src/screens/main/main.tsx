import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import pluralize from 'pluralize';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, changeSortType} from '../../store/action';
import {SORT_TYPE} from '../../const';
import {SortHighToLow, SortLowToHigh, SortTopRated} from '../../utils/utils';

function Main(): JSX.Element {
  const cityName = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const currentOffers = offers.filter((offer) => offer.city.name === cityName);
  const isEmpty = currentOffers.length === 0;

  const getSortOffers = () => {
    switch (sortType) {
      case SORT_TYPE[1]:
        return currentOffers.sort(SortHighToLow);
      case SORT_TYPE[2]:
        return currentOffers.sort(SortLowToHigh);
      case SORT_TYPE[3]:
        return currentOffers.sort(SortTopRated);
      default:
        return currentOffers;
    }
  };

  getSortOffers();


  const [id, setOffersId] = useState(0);

  const handleMouseEnter = (newId: number) => setOffersId(newId);

  const handleSortClick = (sortTypeCheck: string) => dispatch(changeSortType(sortTypeCheck));

  const handleCityClick = (city: string) => {
    dispatch(changeCity(city));
    dispatch(changeSortType(SORT_TYPE[0]));
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
                  {`${currentOffers.length} ${pluralize('place', currentOffers.length)} to stay in ${currentOffers[0].city.name}`}
                </b>

                <Sort sortTypeCheck={sortType} onSortClick={handleSortClick}/>

                <CardList
                  offers={currentOffers}
                  onCardHover={handleMouseEnter}
                />

              </section>}

            <div className="cities__right-section">

              {!isEmpty &&
                <Map
                  className="cities__map"
                  offersInCurrentCity = {currentOffers}
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
