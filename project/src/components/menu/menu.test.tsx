import { render, screen } from '@testing-library/react';
import Menu from './menu';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { City } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Menu', () => {
  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Menu selectedCity={City.Cologne} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(City.Cologne)).toBeInTheDocument();
    expect(screen.getByTestId(`menu-item-${City.Cologne}`)).toHaveClass('tabs__item--active');
  });
});
