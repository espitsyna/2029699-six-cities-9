import Menu from '../menu/menu';
import CardsList from './cards-list';
import Map from '../map/map';
import Loader from '../loader/loader';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { City } from '../../const';

type MainPageProps = {
  selectedCity: City,
  offers: Offer[],
  loading: boolean,
};

const mapHeight = 1000;

function MainPage({ selectedCity, offers, loading }: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);

  return (
    <main className={`page__main page__main--index ${offers.length ? '' : 'page__main--index-empty'}`}>
      <Menu selectedCity={selectedCity} />
      <div className="cities">
        {
          loading ? (
            <Loader />
          ) : (
            <div className={`cities__places-container container ${offers.length ? '' : 'cities__places-container--empty'}`}>
              <CardsList
                selectedCity={selectedCity}
                offers={offers}
                onNavigate={setActiveOffer}
              />
              <div className="cities__right-section">
                {offers.length ? (
                  <section className="cities__map map">
                    <Map
                      offers={offers}
                      activeOffer={activeOffer}
                      height={mapHeight}
                    />
                  </section>
                ) : null}
              </div>
            </div>
          )
        }
      </div>
    </main>
  );
}

export default MainPage;
