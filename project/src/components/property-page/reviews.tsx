import Review from './review';
import NewReview from './new-review';
import { Review as ReviewType, NewReview as NewReviewType } from '../../types/offer';
import { useRef } from 'react';
import { AuthStatus } from '../../types/auth';

type ReviewsProps = {
  authStatus: AuthStatus,
  reviews: ReviewType[],
  count: number,
  onReviewSubmit: (review: NewReviewType) => void,
};

function Reviews({ authStatus, reviews, count, onReviewSubmit }: ReviewsProps): JSX.Element {
  const reviewsRef = useRef<HTMLInputElement>(null);

  const handleReviewSubmit = async (review: NewReviewType) => {
    await onReviewSubmit(review);
    reviewsRef.current?.scrollIntoView();
  };

  return (
    <section className="property__reviews reviews" ref={reviewsRef}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{count}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<Review key={review.id} {...review} />))}
      </ul>
      {authStatus === AuthStatus.auth && (
        <NewReview
          onReviewSubmit={handleReviewSubmit}
        />
      )}
    </section>
  );
}

export default Reviews;
