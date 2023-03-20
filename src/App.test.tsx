import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const linkElement = screen.getByTestId('App');
  expect(linkElement).toBeInTheDocument();
});
