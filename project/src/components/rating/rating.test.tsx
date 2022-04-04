import { render, screen } from '@testing-library/react';
import Rating from './rating';

describe('Component: Rating', () => {
  it('should render correctly with value', () => {
    render(
      <Rating
        rating={4.1}
        className="className"
        showValue
      />,
    );

    expect(screen.getByTestId('rating')).toHaveStyle('width: 80%;');
    expect(screen.getByText(4.1)).toBeInTheDocument();
  });

  it('should render correctly without value', () => {
    render(
      <Rating
        rating={3.3}
        className="className"
        showValue={false}
      />,
    );

    expect(screen.getByTestId('rating')).toHaveStyle('width: 60%;');
    expect(screen.queryByText(3.3)).not.toBeInTheDocument();
  });
});
