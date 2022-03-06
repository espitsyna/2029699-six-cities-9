import Review from './review';
import NewReview from './new-review';
import { Review as ReviewType } from '../../types/offer';

type ReviewsProps = {
  authStatus: boolean,
  reviews: ReviewType[],
  count: number,
};

function Reviews({ authStatus, reviews, count }: ReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{count}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<Review key={review.id} {...review} />))}
      </ul>
      {authStatus && (
        <NewReview />
      )}
    </section>
  );
}

export default Reviews;
