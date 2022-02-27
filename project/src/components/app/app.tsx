import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import NotFoundPage from '../not-found-page/not-found-page';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { reviews } from '../../mocks/reviews';

type AppProps = {
  cardsCount: number,
  offers: Offer[],
};

const authStatus = false;

function App({ cardsCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout authStatus={authStatus} />}>
          <Route
            index
            element={<MainPage cardsCount={cardsCount} offers={offers} />}
          />
          <Route
            path="login"
            element={<LoginPage authStatus={authStatus} />}
          />
          <Route
            path="favorites"
            element={<PrivateRoute authStatus={authStatus}><FavoritesPage /></PrivateRoute>}
          />
          <Route
            path="/offer/:id"
            element={<PropertyPage authStatus={authStatus} offers={offers} reviews={reviews} />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
