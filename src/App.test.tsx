import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Brand from './components/UI/Brand';
import NavigationBar from './components/NavigationBar';

test('renders React Bank title', () => {
  render(<App />);
  expect(<Brand/>).toBeDefined();
  expect(<NavigationBar/>).toBeDefined();
});
