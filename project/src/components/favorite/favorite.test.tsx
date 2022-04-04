import { render, screen } from '@testing-library/react';
import Favorite from './favorite';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus } from '../../types/auth';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Favorite', () => {
  it('should render correctly', () => {
    const store = mockStore({
      user: { authStatus: AuthStatus.auth },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Favorite
            offerId={1}
            isFavorite={false}
            className="className"
            imageSize={{ width: 18, height: 19 }}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('To bookmarks')).toBeInTheDocument();
  });
});
