import { getCountries } from '../../services/location';
import axios from 'axios';

jest.mock('axios');

it('Get location', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        country: 'Nigeria',
        population: '216,746,934',
      },
    ],
  });
  const location = await getCountries('Nigeria');
  expect(location).toEqual([
    {
      country: 'Nigeria',
      population: '216,746,934',
    },

  ]);
});
