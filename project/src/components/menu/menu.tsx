import { Link } from 'react-router-dom';

type MenuProps = {
  active: string;
};

function Menu({ active }: MenuProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'].map((city) => (
                <li key={city} className="locations__item">
                  <Link className={`locations__item-link tabs__item ${active === city ? 'tabs__item--active' : ''}`} to="/">
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

export default Menu;
