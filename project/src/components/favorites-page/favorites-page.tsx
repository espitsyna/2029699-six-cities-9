import Card from '../card/card';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useEffect, useState } from 'react';
import { ApiRoute } from '../../const';
import { api } from '../../services/api';
import Loader from '../loader/loader';

function FavoritesPage(): JSX.Element {
  const [offers, setOffers] = useState([] as Offer[]);
  const [loading, setLoading] = useState(true);
  const apiInstance = api();

  const loadFavorites = async () => {
    const { data } = await apiInstance.get(ApiRoute.favorite);
    setOffers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (<Loader />);
  }

  return (
    <>
      <main className={`page__main page__main--favorites ${offers.length ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {offers.length ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {[...new Set(offers.map(({city: {name}}) => name))].map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="/">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offers.filter(({ city: { name } }) => name === city).map((offer) => (
                          <Card
                            key={offer.id}
                            className="favorites__card"
                            imageSize={{ height: 110, width: 150 }}
                            card={offer}
                            onFavorite={loadFavorites}
                          />
                        ))
                      }
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </>
  );
}

export default FavoritesPage;
