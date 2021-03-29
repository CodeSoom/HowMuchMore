import { loadItem, saveItem } from './storage';

test('storageService', () => {
  const { key, value } = {
    key: 'token',
    value: 'tddtddtdd',
  };

  saveItem(key, value);

  const item = loadItem(key);

  expect(item).toBe(value);
});
