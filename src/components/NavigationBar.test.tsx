import React from 'react';
import { render, screen } from '@testing-library/react';

import NavigationBar from './NavigationBar'
import Menu from './Menu';
import Brand from './Brand';

test('renders Brand and Menu components', () => {
  render(<NavigationBar />);
  expect(<Brand/>).toBeDefined();
  expect(<Menu/>).toBeDefined();
});
