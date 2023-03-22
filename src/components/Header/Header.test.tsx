import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders Header', () => {
  render(<Header />);
  const element = screen.getByTestId('Header');
  expect(element).toBeInTheDocument();
});
