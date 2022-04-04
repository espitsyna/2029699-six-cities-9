import { render, screen } from '@testing-library/react';
import SortingMenu from './sorting-menu';
import { Sorting } from '../../../../const';

describe('Component: SortingMenu', () => {
  it('should render correctly', () => {
    render(
      <SortingMenu
        selectedSorting={Sorting.rated}
        onSelect={jest.fn}
      />,
    );

    expect(screen.getByText('Top rated first', { exact: false })).toBeInTheDocument();
  });
});
