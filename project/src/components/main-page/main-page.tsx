import Menu from '../menu/menu';
import CardsList from './cards-list/cards-list';
import Map from '../map/map';
import Loader from '../loader/loader';
import { Offer } from '../../types/offer';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

const mapHeight = 1000;

function MainPage(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);
  const [offers, setOffers] = useState([] as Offer[]);
  const [loading, setLoading] = useState(true);
  const { city: selectedCity, loading: loadingData, offers: allOffers } = useAppSelector(({ data }) => data);

  useEffect(() => {
    setOffers(allOffers.filter(({ city: { name } }) => name === selectedCity));
  }, [selectedCity, allOffers]);

  useEffect(() => {
    if (!loadingData) {
      setLoading(false);
    }
  }, [offers, loadingData]);

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
