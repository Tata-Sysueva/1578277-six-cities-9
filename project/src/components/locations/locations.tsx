import {CITIES} from '../../const';
import classNames from 'classnames';

type LocationsProps = {
  cityName: string,
  onCityClick: (city: string) => void;
}

function Locations({cityName, onCityClick}: LocationsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': cityName === city})}
                href="/#"
                onClick = {() => onCityClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
