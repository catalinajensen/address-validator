import axios from 'axios';
import { API, apiKey, getAddresses } from './addresses';
import streetsMock from '../mocks/streets.json';

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
