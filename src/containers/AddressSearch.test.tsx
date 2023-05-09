import React from 'react';
import { useQuery } from 'react-query';
import { render, screen } from '@testing-library/react';
import streetsMockData from '../mocks/streets.json';
import AddressSearch from './AddressSearch';

jest.mock('react-query', () => ({
  useQuery: jest.fn()
}));

test('renders header', () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: streetsMockData
  });

  render(<AddressSearch />);
  const page = screen.getByRole('heading', { name: 'Address validator' });
  expect(page).toBeInTheDocument();
});
