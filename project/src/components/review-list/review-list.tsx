import {FROM, REVIEWS_TO} from '../../const';
import Review from '../review/review';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getReviews} from '../../store/data/selectors';
import {ReviewType} from '../../types/review-type';
import {useEffect} from 'react';
import {fetchReviews} from '../../store/api-actions';

type ReviewListProps = {
  cardId: number,
}

function ReviewList({cardId}: ReviewListProps):JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    dispatch(fetchReviews(cardId));
  }, [dispatch, cardId]);

  return (
    <ul className="reviews__list">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews?.length}</span>
      </h2>

      {reviews
        .slice(FROM, REVIEWS_TO)
        .map((review: ReviewType) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
