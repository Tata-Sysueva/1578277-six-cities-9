import styles from './NotFoundScreen.module.css';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <section className={styles.section}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link"
                to={AppRoute.Main}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>

          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className="places__found">
            Looks like you&apos;re lost, friend
          </h1>
          <p className="places__option">
            The page you are looking for can&apos;t be found. Error 404.
          </p>
          <a className="reviews__submit form__submit button" href="/">Back to home</a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundScreen;
