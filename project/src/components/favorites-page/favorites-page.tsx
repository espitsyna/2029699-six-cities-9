import Card from '../card/card';
import { Accommodation } from '../../types/offer';

function FavoritesPage(): JSX.Element {
  const data = [{
    id: 1,
    previewImage: 'apartment-small-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    isPremium: true,
  }, {
    id: 2,
    previewImage: 'room-small.jpg',
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'room',
    isPremium: false,
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
                  data.map(({ id, type, ...params }) => (
                    <Card
                      key={id}
                      className="favorites__card"
                      imageSize={{ height: 110, width: 150 }}
                      card={{
                        id,
                        type: type as Accommodation,
                        isFavorite: true,
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
                    id: 4,
                    previewImage: 'apartment-small-04.jpg',
                    price: 180,
                    rating: 5,
                    title: 'White castle',
                    isFavorite: true,
                    isPremium: false,
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
