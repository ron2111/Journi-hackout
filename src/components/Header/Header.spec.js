import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders a Header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  it('has a heading with a title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getByText('Journi');
    expect(title).toBeInTheDocument();
  });

  it('has one nav link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
