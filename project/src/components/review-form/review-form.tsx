import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {RATING_TYPES, ReviewValues, ZERO} from '../../const';
import ReviewRating from '../review-rating/review-rating';
import {postCommentsAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getPostSuccess} from '../../store/app/selectors';
import {isPostSuccess} from '../../store/app/app';

type ReviewFormProps = {
  cardId: number,
}

function ReviewForm({ cardId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isCommentSuccess = useAppSelector(getPostSuccess);

  const [formData, setFormData] = useState({
    comment: '',
    rating: ZERO,
  });

  useEffect(() => {
    if (isCommentSuccess) {
      dispatch(isPostSuccess(false));
      setFormData({
        comment: '',
        rating: ZERO,
      });
    }
  }, [dispatch, isCommentSuccess]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData !== null) {
      dispatch(postCommentsAction({...formData, id: cardId}));
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const isShort = formData.comment.length <= ReviewValues.MinLength;
  const isLong = formData.comment.length > ReviewValues.MaxLength;
  const isCheck = Number(formData.rating) < ReviewValues.MinRating;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TYPES.map((ratingType) =>
          (
            <ReviewRating
              stars={ratingType.stars}
              title={ratingType.title}
              onFieldChange={handleChange}
              key={ratingType.stars}
              formDataRating={Number(formData.rating)}
            />
          ),
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={formData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isShort || isCheck || isLong}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
