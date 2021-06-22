import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Bank title', () => {
  render(<App />);
  const title = screen.getByText(/React Bank/i);
  expect(title).toBeInTheDocument();
});
