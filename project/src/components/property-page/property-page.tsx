import Card from '../card/card';
import Rating from '../rating/rating';
import Accommodation from '../accomodation/accomodation';
import Favorite from '../favorite/favorite';
import Reviews from './reviews';
import { useParams, Navigate } from 'react-router-dom';
import { Offer, Review } from '../../types/offer';

type PropertyPageProps = {
  authStatus: boolean,
  offers: Offer[],
  reviews: Review[],
}

function PropertyPage({ authStatus, offers, reviews }: PropertyPageProps): JSX.Element {
  const { id: propertyId = '' } = useParams();
  const property = offers.find((offer) => offer.id === +propertyId);
  if (!property) {
    return (<Navigate to="/" />);
  }

  const {
    images, title, type, rating, bedrooms, isPremium, isFavorite, maxAdults, price, goods, description,
    host: { avatarUrl: hostAvatarUrl, name: hostName, isPro },
  } = property;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        {images.length && (
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={`img/${image}`} alt="Studio"/>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <Favorite
                isFavorite={isFavorite}
                className="property"
                imageSize={{ width: 31, height: 33 }}
              />
            </div>
            <Rating
              rating={rating}
              className="property"
              showValue
            />
            <ul className="property__features">
              <li className="property__feature property__feature--entire"><Accommodation type={type} /></li>
              <li className="property__feature property__feature--bedrooms">{`${bedrooms} Bedroom(s)`}</li>
              <li className="property__feature property__feature--adults">{`Max ${maxAdults} adult(s)`}</li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{`€${price}`}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            {goods.length && (
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (<li key={good} className="property__inside-item">{good}</li>))}
                </ul>
              </div>
            )}
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                  <img className="property__avatar user__avatar" src={`img/${hostAvatarUrl}`} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">{hostName}</span>
                {isPro && (<span className="property__user-status">Pro</span>)}
              </div>
              <div className="property__description">
                {description.split('\n').map((text) => (<p key={text} className="property__text">{text}</p>))}
              </div>
            </div>
            <Reviews authStatus={authStatus} reviews={reviews} />
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              offers.filter((offer) => offer.id !== +propertyId)
                .slice(0, 3)
                .map(({ id, ...params }) => (
                  <Card
                    key={id}
                    className="near-places__card"
                    card={{ id, ...params }}
                  />),
                )
            }
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyPage;
