import {ReviewType} from '../../types/review-type';
import {getRatingPercent} from '../../utils/utils';
import dayjs from 'dayjs';

type CommentProps = {
  review: ReviewType;
}

function Review({review}: CommentProps):JSX.Element {
  const {
    comment,
    date,
    user,
    rating,
  } = review;

  const {
    avatarUrl,
    name,
  } = user;

  const dateReview = dayjs(date).format('MMMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dateReview}</time>
      </div>
    </li>
  );
}

export default Review;
