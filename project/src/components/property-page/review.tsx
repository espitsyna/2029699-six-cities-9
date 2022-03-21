import Rating from '../rating/rating';
import { Review as ReviewType } from '../../types/offer';

function Review({ id, rating, date, comment, user: { avatarUrl, name } }: ReviewType): JSX.Element {
  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} className="reviews" showValue={false} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={new Date(date).toISOString()}>{new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}</time>
      </div>
    </li>
  );
}

export default Review;
