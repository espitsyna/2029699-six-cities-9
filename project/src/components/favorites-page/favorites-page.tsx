import Card from '../card/card';
import AccommodationType from '../../types/AccomodationType';

function FavoritesPage(): JSX.Element {
  return (
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
                [{
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
                }].map(({ key, type, ...params }) => (
                  <Card
                    key={key}
                    type={type as AccommodationType}
                    className="favorites__card"
                    imageSize={{ height: 110, width: 150 }}
                    isFavourite
                    {...params}
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
                image="apartment-small-04.jpg"
                price={180}
                rating={5}
                title="White castle"
                isFavourite
                type="apartment"
                className="favorites__card"
                imageSize={{ height: 110, width: 150 }}
              />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default FavoritesPage;
