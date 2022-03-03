import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[],
  cardsCount: number,
  onNavigate: (id: number) => void,
};

function CardsList ({ offers, cardsCount, onNavigate }: CardsListProps): JSX.Element {
  return offers.length ? (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
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
          offers
            .slice(0, cardsCount)
            .map((offer) => (
              <Card
                key={offer.id}
                className="cities__place-card"
                card={offer}
                onNavigate={onNavigate}
              />),
            )
        }
      </div>
    </section>
  ) : (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in Amsterdam</p>
      </div>
    </section>
  );
}

export default CardsList;
