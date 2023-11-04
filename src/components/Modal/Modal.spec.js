import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  it('renders a warning message and two buttons when clicking on the delete button', () => {
    render(<Modal children={'Are you sure you want to delete this trip?'} />);

    const message = screen.getByText(
      'Are you sure you want to delete this trip?'
    );

    const buttonKeep = screen.getByText(/Yes/i);
    const buttonDelete = screen.getByText(/No/i);

    expect(message).toBeInTheDocument();
    expect(buttonKeep).toBeInTheDocument();
    expect(buttonDelete).toBeInTheDocument();
  });

  it('calls the delete callback on click of button delete', () => {
    const deleteModal = jest.fn();
    render(<Modal onDelete={deleteModal} />);

    const buttonDelete = screen.getByRole('button', { name: /yes/i });

    userEvent.click(buttonDelete);
    expect(deleteModal).toHaveBeenCalled();
  });

  it('keeps the current card when clicking on "no"', () => {
    const keepModal = jest.fn();
    render(<Modal onKeep={keepModal} />);

    const buttonKeep = screen.getByRole('button', { name: /no/i });

    userEvent.click(buttonKeep);
    expect(keepModal).toHaveBeenCalled();
  });
});
