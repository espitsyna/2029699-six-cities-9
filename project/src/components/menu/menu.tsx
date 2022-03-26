import { Link } from 'react-router-dom';
import { City } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectCity } from '../../store/action';
import { memo } from 'react';

type MenuProps = {
  selectedCity: City;
};

function Menu({ selectedCity }: MenuProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              Object.values(City).map((city) => (
                <li key={city} className="locations__item">
                  <Link
                    to="/"
                    className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                    onClick={() => dispatch(selectCity({ city }))}
                  >
                    <span>{city}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </>
  );
}

export default memo(Menu);
