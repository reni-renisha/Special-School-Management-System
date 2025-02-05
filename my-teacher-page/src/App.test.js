import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student page', () => {
  render(<App />);
  const headingElement = screen.getByText(/Sign in to your account/i);
  expect(headingElement).toBeInTheDocument();
});
