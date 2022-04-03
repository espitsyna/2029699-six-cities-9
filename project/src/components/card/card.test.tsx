import { render, screen } from '@testing-library/react';
import Card from './card';
import { offers } from '../../utils/mock';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus } from '../../types/auth';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Card', () => {
  it('should render correctly', () => {
    const store = mockStore({
      user: { authStatus: AuthStatus.auth },
    });
    const offer = offers[0];

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card
            card={offer}
            className="className"
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
  });
});
