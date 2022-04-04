import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import PremiumMark from '../../components/premium-mark/premium-mark';
import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import Review from '../../components/review/review';
import {AuthorizationStatus} from '../../const';
import {getRatingPercent, uppercaseFirstLetter} from '../../utils/utils';
import RoomGallery from '../../components/room-gallery/room-gallery';
import pluralize from 'pluralize';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {useEffect} from 'react';
import {fetchOfferAction, fetchOffersNearAction, fetchReviews} from '../../store/api-actions';
import Loading from '../../components/loading/loading';

type RoomProps = {
  authorizationStatus: string,
};

function Room({authorizationStatus}: RoomProps ): JSX.Element {
  const {offer, offersNear, reviews, isDataOfferLoaded} = useAppSelector(({DATA}) => DATA);

  const params = useParams();
  const paramsId = params.id;
  const cardId = Number(paramsId);

  useEffect(() => {
    store.dispatch(fetchOfferAction(cardId));
    store.dispatch(fetchOffersNearAction(cardId));
    store.dispatch(fetchReviews(cardId));
  }, [cardId, reviews]);

  if (!offer || !isDataOfferLoaded) {
    return (
      <Loading />
    );
  }

  const {
    id,
    title,
    rating,
    maxAdults,
    price,
    goods,
    bedrooms,
    description,
    type,
    host,
    isPremium,
    images,
  } = offer;

  const {
    avatarUrl,
    name,
    isPro,
  } = host;

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus} isAuthorizations/>

      <main className="page__main page__main--property">
        <section className="property">

          <RoomGallery imagesSrc={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumMark isProperty/>}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingPercent(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {uppercaseFirstLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {pluralize('Bedroom', bedrooms)}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <li className="property__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`
                      property__avatar-wrapper
                      user__avatar-wrapper
                      ${isPro && 'property__avatar-wrapper--pro'}
                    `}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>

                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {reviews.map((review) => <Review key={review.id} review={review}/>)}
                </ul>

                {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm cardId={cardId} /> : '' }

              </section>
            </div>
          </div>

          <Map
            className="property__map"
            offersInCurrentCity={offersNear.concat(offer)}
            currentId={id}
          />
        </section>

        <NearPlaces offersNear={offersNear} />
      </main>
    </div>
  );
}

export default Room;
