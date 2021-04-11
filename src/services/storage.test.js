import { loadItem, saveItem } from './storage';

describe('storageService', () => {
  context('with legacy profile', () => {
    it('removes legacy keys', () => {
      const { key, value } = {
        key: 'profile',
        value: {
          isNew: false,
          name: '신형탁',
          salary: '5000',
          asset: '10000',
        },
      };

      const result = {
        isNew: false,
        name: '신형탁',
        monthlySavings: 0,
        currentBalance: 0,
      };

      saveItem(key, JSON.stringify(value));

      const legacyKeys = ['salary', 'asset'];

      const newKeys = ['monthlySavings', 'currentBalance'];

      const item = loadItem({ key, legacyKeys, newKeys });

      expect(item).toStrictEqual(result);
    });
  });

  context('without legacy profile', () => {
    it('returns saved Items', () => {
      const { key, value } = {
        key: 'profile',
        value: {
          isNew: false,
          name: '신형탁',
          monthlySavings: '5000',
          currentBalance: '10000',
        },
      };

      const result = {
        isNew: false,
        name: '신형탁',
        monthlySavings: '5000',
        currentBalance: '10000',
      };

      saveItem(key, JSON.stringify(value));

      const item = loadItem({ key });

      expect(item).toStrictEqual(result);
    });
  });
});
