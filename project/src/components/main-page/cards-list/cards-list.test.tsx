import { render, screen } from '@testing-library/react';
import CardsList from './cards-list';
import { offers } from '../../../utils/mock';
import HistoryRouter from '../../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus } from '../../../types/auth';
import { City } from '../../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CardsList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      user: { authStatus: AuthStatus.auth },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardsList
            selectedCity={City.Cologne}
            offers={offers}
            onNavigate={jest.fn}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('2 places to stay in Cologne')).toBeInTheDocument();
  });
});
