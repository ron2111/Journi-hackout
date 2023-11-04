import { render, screen } from '@testing-library/react';
import PastTripList from './PastTripList';

describe('PastTripList', () => {
  it('renders a message to the user if there are no past trips yet', () => {
    render(<PastTripList />);

    const message = screen.getByText(
      "Seems like you don't have any past trips yet."
    );
    expect(message).toBeInTheDocument();
  });
});
