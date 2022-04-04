import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { offers } from '../../utils/mock';
import { AuthStatus } from '../../types/auth';
import { City } from '../../const';

const mockStore = configureMockStore();

const store = mockStore({
  data: { city: City.Amsterdam, offers, loading: false },
  user: { authStatus: AuthStatus.auth },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render Main page when user navigate to "/"', () => {
    history.push('/');

    render(fakeApp);

    expect(screen.getByText('1 places to stay in Amsterdam')).toBeInTheDocument();
  });

  it('should be redirected to Main page when user navigate to "/login"', () => {
    history.push('/login');

    render(fakeApp);

    expect(screen.getByText('1 places to stay in Amsterdam')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
