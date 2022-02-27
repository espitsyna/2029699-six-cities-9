import { SyntheticEvent, useEffect, useState } from 'react';

function NewReview(): JSX.Element {
  const [isDisabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    setDisabled(!rating || review.length < 50 || review.length > 300);
  }, [rating, review]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((option) => (
          <>
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
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default NewReview;
