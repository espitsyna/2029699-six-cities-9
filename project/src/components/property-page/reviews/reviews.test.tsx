import { render, screen } from '@testing-library/react';
import Reviews from './reviews';
import { AuthStatus } from '../../../types/auth';
import { review } from '../../../utils/mock';

describe('Component: Reviews', () => {
  it('should render correctly when user is authorized', () => {
    render(
      <Reviews
        authStatus={AuthStatus.auth}
        reviews={[]}
        count={0}
        onReviewSubmit={jest.fn}
      />,
    );

    expect(screen.getByText((_, element) => element?.textContent === 'Reviews · 0')).toBeInTheDocument();
    expect(screen.getByText('Your review')).toBeInTheDocument();
  });

  it('should render correctly when user is not authorized', () => {
    render(
      <Reviews
        authStatus={AuthStatus.noAuth}
        reviews={[review]}
        count={1}
        onReviewSubmit={jest.fn}
      />,
    );

    expect(screen.getByText((_, element) => element?.textContent === 'Reviews · 1')).toBeInTheDocument();
    expect(screen.queryByText('Your review')).not.toBeInTheDocument();
  });
});
