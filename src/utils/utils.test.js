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
    name: '신형탁',
    age: 29,
    salary: 5000,
    asset: 10000,
  };
  const incompleteObject = {
    name: '신형탁',
    age: '',
    salary: 0,
    asset: 0,
  };

  expect(isExist(object)).toBeTruthy();
  expect(isExist(incompleteObject)).toBeFalsy();
});
