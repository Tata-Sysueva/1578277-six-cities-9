import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {fetchUserInfo, logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import {getUser} from '../../store/data/selectors';
import {MouseEvent} from 'react';

type UserNavProps = {
  authorizationStatus?: string,
}

function UserNav({authorizationStatus}: UserNavProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const email = user?.email;
  const avatarUrl = user?.avatarUrl;

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch, email]);

  const [isLogged, setLogged] = useState(true);

  const handleSingOut = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
    setLogged(false);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatus.Auth && isLogged ?
            <>
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Favorites}
                >
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={{backgroundImage: `url(${avatarUrl})`}}
                  />
                  <span className="header__user-name user__name">{email}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="/#" onClick={handleSingOut}>
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </> :
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.SignIn}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
        }
      </ul>
    </nav>
  );
}

export default UserNav;
