import Rating from '../rating/rating';
import NewReview from './new-review';
import { Review } from '../../types/offer';

type ReviewsProps = {
  authStatus: boolean,
  reviews: Review[],
};

function Reviews({ authStatus, reviews }: ReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews
          .sort(({ date: date1 }, {date: date2}) => new Date(date1) < new Date(date2) ? 1 : -1)
          .slice(0, 10)
          .map(({ id, comment, rating, date, user: { avatarUrl, name } }) => (
            <li key={id} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={`img/${avatarUrl}`} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">{name}</span>
              </div>
              <div className="reviews__info">
                <Rating rating={rating} className="reviews" showValue={false} />
                <p className="reviews__text">{comment}</p>
                <time className="reviews__time" dateTime={new Date(date).toISOString()}>{date}</time>
              </div>
            </li>
          ))}
      </ul>
      {authStatus && (
        <NewReview />
      )}
    </section>
  );
}

export default Reviews;
