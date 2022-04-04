import { render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <NotFoundPage />,
    );

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
