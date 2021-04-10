import { fetchApartments } from './api';

jest.mock('./api');

describe('api', () => {
  const APARTMENTS = [
    {
      name: '아크로리버파크',
      date: '2021-03',
      size: '129.92',
      price: '470000',
      lotNumber: 1,
    },
    {
      name: '서울',
      date: '2021-02',
      size: '200.27',
      price: '420000',
      lotNumber: 2,
    },
  ];

  describe('fetchApartments', () => {
    it('returns apartments', async () => {
      const apartments = await fetchApartments({ apartmentCategory: 'riverside' });

      expect(apartments).toEqual(APARTMENTS);
      expect(apartments[0].name).toEqual(APARTMENTS[0].name);
      expect(apartments[1].name).toEqual(APARTMENTS[1].name);
    });
  });
});
