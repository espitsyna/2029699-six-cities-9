import { render, screen } from '@testing-library/react';
import LoginPage from './login-page';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus } from '../../types/auth';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginPage authStatus={AuthStatus.noAuth} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  });
});
