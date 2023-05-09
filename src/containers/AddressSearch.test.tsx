import React from 'react';
import { render, screen } from '@testing-library/react';
import AddressSearch from './AddressSearch';

test('renders header', () => {
  render(<AddressSearch />);
  const page = screen.getByRole('heading', { name: 'Address validator' });
  expect(page).toBeInTheDocument();
});
