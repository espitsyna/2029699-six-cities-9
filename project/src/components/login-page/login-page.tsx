import { Link, Navigate } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectCity } from '../../store/action';
import { loginAction } from '../../store/api-action';
import { City } from '../../const';
import { toast } from 'react-toastify';

type LoginPageProps = {
  authStatus: boolean,
}

function LoginPage({ authStatus }: LoginPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (authStatus) {
    return (<Navigate to="/" />);
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Email is invalid');
      return;
    }
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password) || password.includes(' ')) {
      toast.error('Password is invalid');
      return;
    }

    dispatch(loginAction({ email, password }));
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
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
