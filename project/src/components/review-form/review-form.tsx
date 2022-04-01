import {ChangeEvent, FormEvent, useState} from 'react';
import {Messages, RATING_TYPES} from '../../const';
import ReviewRating from '../review-rating/review-rating';
import {postCommentsAction} from '../../store/api-actions';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../hooks';
import {useParams} from 'react-router-dom';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const params = useParams();
  const paramsId = params.id;
  const cardId = Number(paramsId);

  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
    id: cardId,
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData !== null) {
      dispatch(postCommentsAction(formData));
      toast(Messages.AddComment);
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const isShort = formData.comment.length <= 50;
  const isLong = formData.comment.length > 300;
  const isCheck = Number(formData.rating) < 1;

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
