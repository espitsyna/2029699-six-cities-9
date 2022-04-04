import { render, screen } from '@testing-library/react';
import Accommodation from './accomodation';
import { Accommodation as AccommodationType } from '../../types/offer';

describe('Component: Accommodation', () => {
  it('should render correctly', () => {
    render(
      <Accommodation type={AccommodationType.room} />,
    );

    expect(screen.getByText('private room')).toBeInTheDocument();
  });
});
