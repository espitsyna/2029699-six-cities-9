import Card from '../card/card';
import Menu from '../menu/menu';
import AccommodationType from '../../types/AccomodationType';

type MainPageProps = {
  cardsCount: number,
};

function MainPage({ cardsCount }: MainPageProps): JSX.Element {
  return (
    <>
      <Menu active="Amsterdam" />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {
                [{
                  key: 1,
                  image: 'apartment-01.jpg',
                  price: 120,
                  title: 'Beautiful & luxurious apartment at great location',
                  type: 'apartment',
                  rating: 4,
                  isPremium: true,
                }, {
                  key: 2,
                  image: 'room.jpg',
                  price: 80,
                  title: 'Wood and stone place',
                  type: 'room',
                  rating: 4,
                  isFavourite: true,
                }, {
                  key: 3,
                  image: 'apartment-02.jpg',
                  price: 132,
                  title: 'Canal View Prinsengracht',
                  type: 'apartment',
                  rating: 4,
                }, {
                  key: 4,
                  image: 'apartment-03.jpg',
                  price: 180,
                  title: 'Nice, cozy, warm big bed apartment',
                  type: 'apartment',
                  rating: 5,
                  isPremium: true,
                }, {
                  key: 5,
                  image: 'room.jpg',
                  price: 80,
                  title: 'Wood and stone place',
                  type: 'room',
                  rating: 4,
                  isFavourite: true,
                }]
                  .slice(0, cardsCount)
                  .map(({ key, type, ...params }) => (
                    <Card
                      key={key}
                      className="cities__place-card"
                      type={type as AccommodationType}
                      {...params}
                    />),
                  )
              }
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
