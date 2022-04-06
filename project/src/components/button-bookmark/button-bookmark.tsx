import {AppRoute, AuthorizationStatus} from '../../const';
import {setFavoriteAction} from '../../store/api-actions';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {store} from '../../store';
import classNames from 'classnames';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type ButtonBookmarkProps = {
  isFavorite: boolean,
  id: number,
  isRoom?: boolean,
  isSmall?: boolean,
}

function ButtonBookmark({id, isFavorite, isRoom, isSmall}: ButtonBookmarkProps): JSX.Element {
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const buttonClasses = classNames(
    'button',
    {'property__bookmark-button': isRoom},
    {'property__bookmark-button--active': favoriteStatus && isRoom},
    {'place-card__bookmark-button': !isRoom},
    {'place-card__bookmark-button--active': favoriteStatus && !isRoom},
  );

  const iconClasses = classNames(
    {'place-card__bookmark-icon': !isRoom},
    {'property__bookmark-icon': isRoom},
  );

  const width = isSmall ? '18' : '31';
  const height = isSmall ? '19' : '33';

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      setFavoriteStatus(!favoriteStatus);
      store.dispatch(setFavoriteAction({cardId: id, status: Number(!favoriteStatus)}));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg className={iconClasses} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;
