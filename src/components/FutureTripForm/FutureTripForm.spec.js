import { render, screen } from '@testing-library/react';
import FutureTripForm from './FutureTripForm';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('FutureTripForm', () => {
  it('renders three input fields with placeholder and a button', () => {
    render(
      <MemoryRouter>
        <FutureTripForm />
      </MemoryRouter>
    );

    const inputDestination = screen.getByLabelText(/Destination:/i);
    expect(inputDestination).toHaveAttribute(
      'placeholder',
      'Country/City - click to search on map'
    );

    const inputStartDate = screen.getByLabelText(/Start:/i);
    expect(inputStartDate).toBeInTheDocument();

    const inputEndDate = screen.getByLabelText(/End:/i);
    expect(inputEndDate).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('renders a form with the name "New Trip"', () => {
    render(
      <MemoryRouter>
        <FutureTripForm />
      </MemoryRouter>
    );

    const form = screen.getByRole('form', { name: 'New Trip' });
    expect(form).toBeInTheDocument();
  });

  it('does not submit form data when destination field is not filled out', () => {
    const neverCalled = jest.fn();
    render(
      <MemoryRouter>
        <FutureTripForm onSubmit={neverCalled} />
      </MemoryRouter>
    );

    const inputDestination = screen.getByLabelText(/Destination:/i);

    userEvent.type(inputDestination, '{enter}');

    expect(neverCalled).not.toHaveBeenCalledWith();
  });
});
