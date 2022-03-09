import HeaderMain from '../../components/header-main/header-main';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';

type MainScreenProps = {
  offersCount: number;
  offers: Offer[];
}

function Main({offersCount, offers}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <HeaderMain />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Locations />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>

              <Sort />

              <CardList offers={offers}/>

            </section>
            <div className="cities__right-section">

              <Map className="cities__map" />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
