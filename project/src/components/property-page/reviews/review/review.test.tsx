import { render, screen } from '@testing-library/react';
import Review from './review';
import { review } from '../../../../utils/mock';

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Review { ...review } />,
    );

    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(review.comment)).toBeInTheDocument();
  });
});
