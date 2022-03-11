import Menu from '../menu/menu';
import CardsList from './cards-list';
import Map from '../map/map';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { City } from '../../const';

type MainPageProps = {
  selectedCity: City,
  offers: Offer[],
};

const mapHeight = 800;

function MainPage({ selectedCity, offers }: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);

  return (
    <main className={`page__main page__main--index ${offers.length ? '' : 'page__main--index-empty'}`}>
      <Menu selectedCity={selectedCity} />
      <div className="cities">
        <div className={`cities__places-container container ${offers.length ? '' : 'cities__places-container--empty'}`}>
          <CardsList
            selectedCity={selectedCity}
            offers={offers}
            onNavigate={setActiveOffer}
          />
          <div className="cities__right-section">
            {offers.length && (
              <section className="cities__map map">
                <Map
                  offers={offers}
                  activeOffer={activeOffer}
                  height={mapHeight}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
