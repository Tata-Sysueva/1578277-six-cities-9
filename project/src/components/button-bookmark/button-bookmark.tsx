import {AppRoute, AuthorizationStatus, SizesButton} from '../../const';
import {setFavoriteAction} from '../../store/api-actions';
import {useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type ButtonBookmarkProps = {
  isFavorite: boolean,
  id: number,
  isRoom?: boolean,
  isSmall?: boolean,
}

function ButtonBookmark({id, isFavorite, isRoom, isSmall}: ButtonBookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const buttonClasses = classNames(
    'button',
    {'property__bookmark-button': isRoom},
    {'property__bookmark-button--active': isFavorite && isRoom},
    {'place-card__bookmark-button': !isRoom},
    {'place-card__bookmark-button--active': isFavorite && !isRoom},
  );

  const iconClasses = classNames(
    {'place-card__bookmark-icon': !isRoom},
    {'property__bookmark-icon': isRoom},
  );

  const width = isSmall ? SizesButton.WidthIsSmall : SizesButton.WidthIsBig;
  const height = isSmall ? SizesButton.HeightIsSmall : SizesButton.HeightIsBig;

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(setFavoriteAction({cardId: id, status: Number(!isFavorite)}));
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
