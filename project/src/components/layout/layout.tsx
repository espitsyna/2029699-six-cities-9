import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutAction } from '../../store/api-action';
import { getEmail } from '../../services/storage';
import { AuthStatus } from '../../types/auth';

type LayoutProps = {
  authStatus: AuthStatus,
}

const getClassName = (pathname: string) => {
  switch (pathname) {
    case '/': return 'page--gray page--main';
    case '/login': return 'page--gray page--login';
    default: return '';
  }
};

function Layout ({ authStatus }: LayoutProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  return (
    <div className={`page ${getClassName(pathname)}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authStatus === AuthStatus.auth && (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{getEmail()}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" onClick={() => dispatch(logoutAction())} to="/">
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                )}
                {authStatus !== AuthStatus.auth && '/login' !== pathname && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
