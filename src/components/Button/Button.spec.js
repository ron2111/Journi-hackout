import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  it('calls callback function on click', () => {
    const callback = jest.fn();
    render(<Button onClick={callback} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(callback).toHaveBeenCalled();
  });
});
