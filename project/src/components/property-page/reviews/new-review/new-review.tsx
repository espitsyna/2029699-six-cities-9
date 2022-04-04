import { SyntheticEvent, useEffect, useState } from 'react';
import { NewReview as NewReviewType } from '../../../../types/offer';
import { handleError } from '../../../../services/error';

type NewReviewProps = {
  onReviewSubmit: (review: NewReviewType) => void,
};

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

function NewReview({ onReviewSubmit }: NewReviewProps): JSX.Element {
  const [isDisabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    setDisabled(!rating || comment.length < MIN_LENGTH || comment.length > MAX_LENGTH);
  }, [rating, comment]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await onReviewSubmit({ comment, rating });
      setRating(0);
      setComment('');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((option) => (
          <div
            key={option}
          >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={option}
              id={`${option}-stars`}
              type="radio"
              checked={option === rating}
              onChange={(e) => setRating(+e.target.value)}
            />
            <label htmlFor={`${option}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amouuseMapnt">{MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default NewReview;
