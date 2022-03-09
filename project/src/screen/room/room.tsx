import Header from '../../components/header/header';
import NewComment from '../../components/new-comment/new-comment';
import PremiumMark from '../../components/premium-mark/premium-mark';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import NearPlaces from '../../components/near-places/near-places';
import {Review} from '../../types/review';
import Comment from '../../components/comment/comment';
import {useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {getRatingPercent} from '../../utils/utils';
import RoomGallery from '../../components/room-gallery/room-gallery';
import pluralize from 'pluralize';


type RoomProps = {
  offers: Offer[];
  reviews: Review[];
};

function Room({offers, reviews}: RoomProps ): JSX.Element {
  const params = useParams();
  const paramsId = params.id;
  const cardId = Number(paramsId);
  const curOffer = offers.filter((offer) => offer.id === cardId);
  const [ offerInfo ] = curOffer;

  const {
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
  } = offerInfo;

  const {
    avatarUrl,
    name,
  } = host;


  return (
    <div className="page">
      <Header />

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
                  {type}
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
                      ${isPremium && 'property__avatar-wrapper--pro'}
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
                  {isPremium &&
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => <Comment key={review.id} review={review}/>)}
                </ul>

                {AuthorizationStatus.Auth && <NewComment /> }

              </section>
            </div>
          </div>

          <Map className="property__map" />

        </section>

        <NearPlaces offers={offers} />
      </main>
    </div>
  );
}

export default Room;
