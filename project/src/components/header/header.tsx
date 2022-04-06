import {Link} from 'react-router-dom';
import UserNav from '../user-nav/user-nav';
import {AppRoute} from '../../const';

type HeaderProps = {
  authorizationStatus?: string,
  isAuthorizations?: boolean,
}

function Header({authorizationStatus, isAuthorizations}: HeaderProps): JSX.Element {
  return (
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

          {isAuthorizations && <UserNav authorizationStatus={authorizationStatus}/>}

        </div>
      </div>
    </header>
  );
}

export default Header;
