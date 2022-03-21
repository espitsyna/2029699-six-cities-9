import Card from '../card/card';
import Rating from '../rating/rating';
import Accommodation from '../accomodation/accomodation';
import Favorite from '../favorite/favorite';
import Reviews from './reviews';
import Map from '../map/map';
import { useParams, useNavigate } from 'react-router-dom';
import { NewReview, Offer, Review } from '../../types/offer';
import { useEffect, useRef, useState } from 'react';
import Loader from '../loader/loader';
import { api } from '../../services/api';
import { ApiRoute } from '../../const';
import { handleError } from '../../services/error';

type PropertyPageProps = {
  authStatus: boolean,
}

const mapHeight = 600;

function PropertyPage({ authStatus}: PropertyPageProps): JSX.Element {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const apiInstance = api();
  const mainRef = useRef<HTMLInputElement>(null);

  const [offer, setOffer] = useState(null as Offer|null);
  const [offersNearby, setOffersNearby] = useState([] as Offer[]);
  const [reviews, setReviews] = useState([] as Review[]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiInstance.get(`${ApiRoute.offers}/${id}`);
        setOffer(data);
      } catch (e) {
        handleError(e);
        navigate('/');
        return;
      }

      apiInstance.get(`${ApiRoute.offers}/${id}/nearby`)
        .then(({ data }) => setOffersNearby((data ?? []).slice(0, 3)));

      apiInstance.get(`${ApiRoute.comments}/${id}`)
        .then(({ data }) => setReviews(data ?? []));

      mainRef.current?.scrollIntoView();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!offer) {
    return (
      <Loader />
    );
  }

  const handleSubmitReview = async (review: NewReview)  => {
    try {
      const { data } = await apiInstance.post(`${ApiRoute.comments}/${id}`, review);
      setReviews(data);
    } catch (error) {
      handleError(error);
    }
  };

  const {
    images, title, type, rating, bedrooms, isPremium, isFavorite, maxAdults, price, goods, description,
    host: { avatarUrl: hostAvatarUrl, name: hostName, isPro },
  } = offer;

  return (
    <main className="page__main page__main--property" ref={mainRef}>
      <section className="property">
        {images.length && (
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio"/>
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
                  <img className="property__avatar user__avatar" src={hostAvatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">{hostName}</span>
                {isPro && (<span className="property__user-status">Pro</span>)}
              </div>
              <div className="property__description">
                {description.split('\n').map((text) => (<p key={text} className="property__text">{text}</p>))}
              </div>
            </div>
            <Reviews
              authStatus={authStatus}
              reviews={reviews.sort(({ date: date1 }, {date: date2}) => new Date(date1) < new Date(date2) ? 1 : -1).slice(0, 10)}
              count={reviews.length}
              onReviewSubmit={handleSubmitReview}
            />
          </div>
        </div>
        <section className="property__map map" style={{ paddingRight: '50px', paddingLeft: '50px' }}>
          <Map
            offers={[offer, ...offersNearby]}
            activeOffer={+id}
            height={mapHeight}
          />
        </section>
      </section>
      {offersNearby.length && (
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                offersNearby.map((offerNearby) => (
                  <Card
                    key={offerNearby.id}
                    className="near-places__card"
                    card={offerNearby}
                  />),
                )
              }
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default PropertyPage;
