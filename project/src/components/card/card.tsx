import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import Favorite from '../favorite/favorite';
import Accommodation from '../accomodation/accomodation';
import { Card as CardType } from '../../types/offer';
import { memo } from 'react';

type CardProps = {
  card: CardType,
  className: string,
  imageSize?: { height: number, width: number },
  onNavigate?: (id: number) => void,
  onFavorite?: () => void,
};

function Card({
  card: {
    id,
    previewImage,
    price,
    title,
    type,
    rating,
    isPremium,
    isFavorite,
  },
  className,
  imageSize = { height: 200, width: 260 },
  onNavigate = () => void(0),
  onFavorite,
}: CardProps): JSX.Element {
  const link = `/offer/${id}`;
  return (
    <article className={`${className} place-card`} onMouseEnter={() => onNavigate(id)} onMouseLeave={() => onNavigate(0)}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className.split('__')[0]}__image-wrapper place-card__image-wrapper`}>
        <Link to={link}>
          <img className="place-card__image" src={previewImage} {...imageSize} alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Favorite
            offerId={id}
            isFavorite={isFavorite}
            className="place-card"
            imageSize={{ width: 18, height: 19 }}
            onFavorite={onFavorite}
          />
        </div>
        <Rating
          rating={rating}
          className="place-card"
          showValue={false}
        />
        <h2 className="place-card__name">
          <Link to={link}>{title}</Link>
        </h2>
        <p className="place-card__type"><Accommodation type={type} /></p>
      </div>
    </article>
  );
}

export default memo(Card);
