import { get, isExist } from './utils';

test('get', () => {
  const state = {
    name: '신형탁',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('신형탁');
  expect(g(state)).toBeUndefined();
});

test('isExist', () => {
  const object = {
    isNew: false,
    name: '신형탁',
    age: '29',
    monthlySavings: '5000',
    currentBalance: '10000',
  };

  const incompleteObject = {
    isNew: false,
    name: '신형탁',
    age: '',
    monthlySavings: 0,
    currentBalance: 0,
  };

  expect(isExist(object)).toBeTruthy();
  expect(isExist(incompleteObject)).toBeFalsy();
});
