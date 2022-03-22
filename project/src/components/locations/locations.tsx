import {CITIES_NAME} from '../../const';

type LocationsProps = {
  cityName: string,
  onCityClick: (city: string) => void;
}

function Locations ({cityName, onCityClick}: LocationsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_NAME.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${cityName === city ? 'tabs__item--active' : ''}`}
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
