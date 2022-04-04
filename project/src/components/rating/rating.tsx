type RatingProps = {
  rating: number;
  className: string,
  showValue: boolean,
};

const RATING_PERCENTAGE = 20;

function Rating({ rating, className, showValue }: RatingProps): JSX.Element {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) * RATING_PERCENTAGE}%` }} data-testid="rating"></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showValue && (
        <span className={`${className}__rating-value rating__value`}>{rating}</span>
      )}
    </div>
  );
}

export default Rating;
