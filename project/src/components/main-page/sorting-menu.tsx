import { useState } from 'react';
import { Sorting } from '../../const';

type SortingMenuProps = {
  selectedSorting: Sorting,
  onSelect: (option: Sorting) => void,
};

function SortingMenu({ selectedSorting, onSelect }: SortingMenuProps): JSX.Element {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setMenuOpened((opened) => !opened)}>
        {selectedSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {menuOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(Sorting).map((option)   => (
            <li
              key={option}
              className={`places__option ${option === selectedSorting ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                onSelect(option);
                setMenuOpened(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingMenu;
