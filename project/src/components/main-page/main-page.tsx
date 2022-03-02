import Menu from '../menu/menu';
import CardsList from './cards-list';
import Map from './map';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type MainPageProps = {
  cardsCount: number,
  offers: Offer[],
};

function MainPage({ cardsCount, offers }: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);
  return (
    <main className={`page__main page__main--index ${offers.length ? '' : 'page__main--index-empty'}`}>
      <Menu active="Amsterdam" />
      <div className="cities">
        <div className={`cities__places-container container ${offers.length ? '' : 'cities__places-container--empty'}`}>
          <CardsList
            offers={offers}
            cardsCount={cardsCount}
            onNavigate={setActiveOffer}
          />
          <div className="cities__right-section">
            {offers.length && (
              <section className="cities__map map">
                <Map
                  offers={offers}
                  activeOffer={activeOffer}
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
