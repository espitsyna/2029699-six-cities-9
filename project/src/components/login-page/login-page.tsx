import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectCity } from '../../store/data/data';
import { City } from '../../const';
import LoginForm from './login-form/login-form';
import { AuthStatus } from '../../types/auth';

type LoginPageProps = {
  authStatus: AuthStatus,
}

function LoginPage({ authStatus }: LoginPageProps): JSX.Element {
  const dispatch = useAppDispatch();

  if (authStatus === AuthStatus.auth) {
    return (<Navigate to="/" />);
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/" onClick={() => dispatch(selectCity({ city: City.Amsterdam }))}>
              <span>{City.Amsterdam}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
