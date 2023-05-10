import { useQuery } from 'react-query';
import { render, screen } from '@testing-library/react';
import streetsMockData from '../mocks/streets.json';
import AddressSearch from './AddressSearch';

jest.mock('react-query', () => ({
  useQuery: jest.fn()
}));

const renderComponent = () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: streetsMockData
  });

  render(<AddressSearch />);
};

beforeEach(() => {
  renderComponent();
});

test('renders header', () => {
  const page = screen.getByRole('heading', { name: 'Address validator' });
  expect(page).toBeInTheDocument();
});

test('renders country picker', () => {
  expect(screen.getAllByRole('option').length).toBe(5);

  expect(
    screen.getByRole('option', { name: 'Select your country' })
  ).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Norway' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Denmark' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Sweden' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Finland' })).toBeInTheDocument();
});

test('renders input', () => {
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('renders validate button', () => {
  expect(screen.getByRole('button', { name: 'Validate' })).toBeInTheDocument();
});
