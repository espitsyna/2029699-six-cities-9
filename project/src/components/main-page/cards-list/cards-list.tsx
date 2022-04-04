import { Offer } from '../../../types/offer';
import Card from '../../card/card';
import { City, Sorting, CARDS_COUNT } from '../../../const';
import { useState } from 'react';
import SortingMenu from './sorting-menu/sorting-menu';

type CardsListProps = {
  selectedCity: City,
  offers: Offer[],
  onNavigate: (id: number) => void,
};

const sortList = (
  { rating: rating1, price: price1 }: Offer,
  { rating: rating2, price: price2 }: Offer,
  sorting: Sorting,
) => {
  switch (sorting) {
    case Sorting.asc:
      return price1 <= price2 ? -1 : 1;
    case Sorting.desc:
      return price1 >= price2 ? -1 : 1;
    case Sorting.rated:
      return rating1 >= rating2 ? -1 : 1;

    default: return -1;
  }
};

function CardsList ({ selectedCity, offers, onNavigate }: CardsListProps): JSX.Element {
  const [selectedSorting, setSelectedSorting] = useState(Sorting.popular);

  return offers.length ? (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${selectedCity}`}</b>
      <SortingMenu
        selectedSorting={selectedSorting}
        onSelect={setSelectedSorting}
      />
      <div className="cities__places-list places__list tabs__content">
        {
          offers
            .sort((offer1, offer2) => sortList(offer1, offer2, selectedSorting))
            .slice(0, CARDS_COUNT)
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
        <p className="cities__status-description">{`We could not find any property available at the moment in ${selectedCity}`}</p>
      </div>
    </section>
  );
}

export default CardsList;
