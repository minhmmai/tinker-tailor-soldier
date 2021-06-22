import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders Home and Customer links', () => {
  render(<Menu />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink.closest("a")).toHaveAttribute("href", "/");
  const customersLink = screen.getByText(/Customers/i);
  expect(customersLink.closest("a")).toHaveAttribute("href", "/customers");
});
