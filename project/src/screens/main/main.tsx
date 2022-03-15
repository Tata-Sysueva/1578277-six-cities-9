import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sort from '../../components/sort/sort';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import MainEmpty from '../../components/main-empty/main-empty';

type MainScreenProps = {
  offersCount: number;
  offers: Offer[];
}

function Main({offersCount, offers}: MainScreenProps): JSX.Element {
  const isEmpty = offers.length <=0;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Locations />

        <div className="cities">
          <div className={`cities__places-container container ${isEmpty && 'cities__places-container--empty'}`}>
            {isEmpty ?
              <MainEmpty /> :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in Amsterdam</b>

                <Sort />

                <CardList offers={offers}/>

              </section>
            }

            <div className="cities__right-section">

              {!isEmpty && <Map className="cities__map"/>}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
