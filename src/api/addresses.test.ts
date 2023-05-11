import axios from 'axios';
import { API, apiKey, getAddresses, getAddressNumbers } from './addresses';
import streetsMock from '../mocks/streets.json';
import streetNumebersMock from '../mocks/streetNumbers.json';

jest.mock('axios');

describe('getAddresses', () => {
  it('fetches successfully data from an API', async () => {
    const country = 'NO';
    const streetName = 'akersgata';

    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: streetsMock })
    );

    await expect(getAddresses(country, streetName)).resolves.toEqual(
      streetsMock
    );
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/${country}/streetSearch/${streetName}`,
      {
        params: {
          apiKey
        }
      }
    );
  });
});

describe('getAddressNumbers', () => {
  it('fetches successfully data from an API', async () => {
    const country = 'NO';
    const streetIds = [1234, 2345];

    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: streetNumebersMock })
    );

    await expect(getAddressNumbers(country, streetIds)).resolves.toEqual(
      streetNumebersMock
    );
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/${country}/streetNumberSearch/${streetIds}`,
      {
        params: {
          apiKey
        }
      }
    );
  });
});
