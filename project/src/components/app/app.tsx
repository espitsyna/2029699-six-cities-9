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
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

const authStatus = false;

function App(): JSX.Element {
  const [availableOffers, setAvailableOffers] = useState([] as Offer[]);
  const [loading, setLoading] = useState(true);
  const selectedCity = useAppSelector(({ city }) => city);
  const loadingData = useAppSelector(({ loading: isLoading }) => isLoading);
  const allOffers = useAppSelector(({ offers }) => offers);

  useEffect(() => {
    setAvailableOffers(allOffers.filter(({ city: { name } }) => name === selectedCity));
  }, [selectedCity, allOffers]);

  useEffect(() => {
    if (!loadingData) {
      setLoading(false);
    }
  }, [availableOffers, loadingData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout authStatus={authStatus} />}>
          <Route
            index
            element={<MainPage selectedCity={selectedCity} offers={availableOffers} loading={loading} />}
          />
          <Route
            path="login"
            element={<LoginPage authStatus={authStatus} />}
          />
          <Route
            path="favorites"
            element={<PrivateRoute authStatus={authStatus}><FavoritesPage offers={allOffers.filter(({ isFavorite }) => isFavorite)} /></PrivateRoute>}
          />
          <Route
            path="/offer/:id"
            element={<PropertyPage authStatus={authStatus} offers={availableOffers} reviews={reviews} />}
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
