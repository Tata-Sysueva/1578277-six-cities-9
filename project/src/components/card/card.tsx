import ButtonBookmark from '../button-bookmark/button-bookmark';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Offer} from '../../types/offer';
import {getRatingPercent} from '../../utils/utils';

type CardProps = {
  offer: Offer;
  className: string;
  boxMouseEnterHandler?: any;
}

function Card ({offer, className, boxMouseEnterHandler=''}: CardProps): JSX.Element {
  const {
    id,
    title,
    images,
    price,
    type,
    rating,
  } = offer;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => boxMouseEnterHandler(id)}
    >
      <div className="place-card__image-wrapper">
        <a href="/#">
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <ButtonBookmark />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.Room}/${id}`}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
