import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name heading', () => {
  render(<App />);
  const nameElement = screen.getByText(/Jonathan Dunlap/i);
  expect(nameElement).toBeInTheDocument();
});
