import {ChangeEvent, useState} from 'react';
import {RATING_TYPES} from '../../const';
import ReviewsRating from '../reviews-rating/reviews-rating';

function NewComment (): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TYPES.map((ratingType) =>
          (
            <ReviewsRating
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={formData.review}
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewComment;
