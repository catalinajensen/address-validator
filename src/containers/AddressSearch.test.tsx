import { useQuery } from 'react-query';
import { fireEvent, render, screen } from '@testing-library/react';
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
  const input = screen.getByTestId('item-input');

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  expect(input).toHaveAttribute('placeholder', 'Enter your street name');
  expect(input).toBeDisabled();
});

describe('select country', () => {
  test('selects a country and displays the value', () => {
    const options = screen.getAllByRole('option') as HTMLOptionElement[];
    const input = screen.getByTestId('item-input');

    expect(options[0].selected).toBe(true);

    expect(options[1].selected).toBe(false);
    expect(options[2].selected).toBe(false);
    expect(options[3].selected).toBe(false);
    expect(options[4].selected).toBe(false);

    expect(input).toBeDisabled();

    fireEvent.change(screen.getByTestId('country-picker'), {
      target: { value: 'NO' }
    });

    expect(options[0].selected).toBe(false);
    expect(options[1].selected).toBe(true);
    expect(options[3].selected).toBe(false);
    expect(options[4].selected).toBe(false);

    expect(input).not.toBeDisabled();
    expect(input).toHaveAttribute('placeholder', 'Enter your street name');
  });
});
