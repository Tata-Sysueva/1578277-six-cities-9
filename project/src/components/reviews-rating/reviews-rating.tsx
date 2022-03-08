import {ChangeEvent} from 'react';

type ReviewRatingProps = {
  stars: number,
  title: string,
  onFieldChange: (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
}

function ReviewsRating({stars, title, onFieldChange}: ReviewRatingProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={stars}
        id={`${stars}-stars`}
        type="radio"
        onChange={onFieldChange}
      />
      <label
        htmlFor={`${stars}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default ReviewsRating;
