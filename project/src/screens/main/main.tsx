import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import pluralize from 'pluralize';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortTypes, TIMEOUT_SHOW_ERROR, ZERO} from '../../const';
import {isCheckedAuth, SortHighToLow, SortLowToHigh, SortTopRated} from '../../utils/utils';
import {Offer} from '../../types/offer';
import {changeCity, changeSortType} from '../../store/app/app';
import {getCityName, getSortType} from '../../store/app/selectors';
import {getLoadedDataStatus, getOffers} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import ErrorMessage from '../error-message/error-massage';
import Loading from '../../components/loading/loading';

const sortOffers = (sortType: string, offers: Offer[]) => {
  switch (sortType) {
    case SortTypes.HighToLow:
      return offers.sort(SortHighToLow);
    case SortTypes.LowToHigh:
      return offers.sort(SortLowToHigh);
    case SortTypes.TopRatedFirst:
      return offers.sort(SortTopRated);
    default:
      return offers;
  }
};

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [id, setOffersId] = useState(0);
  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const cityName = useAppSelector(getCityName);
  const sortType = useAppSelector(getSortType);
  const isLoadedStatus = useAppSelector(getLoadedDataStatus);

  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);

  setTimeout(() => {
    setHasTimeElapsed(true);
  }, TIMEOUT_SHOW_ERROR);

  if (isCheckedAuth(authorizationStatus) || !isLoadedStatus) {
    if (hasTimeElapsed) {
      return <ErrorMessage />;
    }
    return <Loading />;
  }

  const currentOffers = offers.filter((offer) => offer.city.name === cityName);
  const isEmpty = currentOffers.length === ZERO;

  const sortedOffers = sortOffers(sortType, currentOffers);

  const handleMouseEnter = (newId: number) => setOffersId(newId);

  const handleCityClick = (city: string) => {
    dispatch(changeCity(city));
    dispatch(changeSortType(SortTypes.Popular));
  };

  return (
    <div className="page page--gray page--main">

      <Header authorizationStatus={authorizationStatus} isAuthorizations />

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

                <Sort sortTypeCheck={sortType} />

                <CardList
                  offers={sortedOffers}
                  onCardHover={handleMouseEnter}
                />

              </section>}

            <div className="cities__right-section">

              {!isEmpty &&
                <Map
                  className="cities__map"
                  offersInCurrentCity={currentOffers}
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
