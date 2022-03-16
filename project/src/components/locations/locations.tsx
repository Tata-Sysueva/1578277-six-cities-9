import {CITIES_NAME} from '../../const';

function Locations (): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_NAME.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className="locations__item-link tabs__item"
                href="/#"
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
