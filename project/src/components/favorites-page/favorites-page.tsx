import Card from '../card/card';
import AccommodationType from '../../types/AccomodationType';

function FavoritesPage(): JSX.Element {
  const data = [{
    key: 1,
    image: 'apartment-small-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    isPremium: true,
  }, {
    key: 2,
    image: 'room-small.jpg',
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'room',
  }];
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  data.map(({ key, type, ...params }) => (
                    <Card
                      key={key}
                      className="favorites__card"
                      imageSize={{ height: 110, width: 150 }}
                      card={{
                        type: type as AccommodationType,
                        isFavourite: true,
                        ...params,
                      }}
                    />),
                  )
                }
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <Card
                  card={{
                    image: 'apartment-small-04.jpg',
                    price: 180,
                    rating: 5,
                    title: 'White castle',
                    isFavourite: true,
                    type: 'apartment',
                  }}
                  className="favorites__card"
                  imageSize={{ height: 110, width: 150 }}
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
