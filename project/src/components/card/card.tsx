import {Link} from 'react-router-dom';
import ButtonBookmark from '../button-bookmark/button-bookmark';
import {AppRoute} from '../../const';
import {Offer} from '../../types/offer';
import {getRatingPercent, uppercaseFirstLetter} from '../../utils/utils';
import PremiumMark from '../premium-mark/premium-mark';

type CardProps = {
  offer: Offer;
  className: string;
  onCardHover?: (id: number) => void;
  classNameWrap?:string,
  classNameInfo?:string,
  isSmall?:boolean,
}

function Card(
  {
    offer,
    className,
    onCardHover,
    classNameWrap='',
    classNameInfo='',
    isSmall,
  }: CardProps): JSX.Element {

  const {
    id,
    title,
    images,
    price,
    type,
    rating,
    isFavorite,
    isPremium,
  } = offer;

  const width = isSmall ? '150' : '260';
  const height = isSmall ? '110' : '200';

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => onCardHover?.(id)}
    >
      {isPremium && <PremiumMark />}

      <div className={`${classNameWrap} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={images[0]}
            width={width}
            height={height}
            alt={title}
          />
        </Link>
      </div>

      <div className={`${classNameInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <ButtonBookmark isFavorite={isFavorite}/>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <Link to={`${AppRoute.Room}/${id}`}>
          <h2 className="place-card__name">
            {title}
          </h2>
        </Link>

        <p className="place-card__type">{uppercaseFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Card;
