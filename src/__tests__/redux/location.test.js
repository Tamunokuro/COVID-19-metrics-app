import axios from 'axios';
import getCountries from '../../services/location';

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
