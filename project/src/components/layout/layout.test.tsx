import { render, screen } from '@testing-library/react';
import Layout from './layout';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus } from '../../types/auth';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Layout', () => {
  it('should render correctly when user authorized', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout authStatus={AuthStatus.auth} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render correctly when user not authorized', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout authStatus={AuthStatus.noAuth} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
