import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PastTripCard from './PastTripCard';

describe('PastTripCard', () => {
  it('renders a destination', () => {
    render(
      <MemoryRouter>
        <PastTripCard destination="Mexico" coordinates={0} />
      </MemoryRouter>
    );

    const destination = screen.getByText(/Mexico/i);
    expect(destination).toBeInTheDocument();
  });
});
