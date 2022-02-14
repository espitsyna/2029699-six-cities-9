import AccommodationType from '../../types/AccomodationType';

type CardProps = {
  className: string,
  image: string,
  price: number,
  title: string,
  type: AccommodationType,
  rating: number,
  isPremium?: boolean,
  isFavourite?: boolean,
  imageSize?: { height: number, width: number },
};

const renderType = (type: AccommodationType) => {
  switch (type) {
    case 'apartment': return 'Apartment';
    case 'room': return 'Private room';
    case 'house': return 'House';
    case 'hotel': return 'Hotel';
  }
};

function Card({
  className,
  image,
  price,
  title,
  type,
  rating,
  isPremium,
  isFavourite,
  imageSize = { height: 200, width: 260 },
}: CardProps): JSX.Element {
  return (
    <article className={`${className} place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className.split('__')[0]}__image-wrapper place-card__image-wrapper`}>
        <a href="/#">
          <img className="place-card__image" src={`img/${image}`} {...imageSize} alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavourite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavourite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{renderType(type)}</p>
      </div>
    </article>
  );
}

export default Card;