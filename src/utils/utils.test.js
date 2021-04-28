import {
  get,
  isExist,
  filterObject,
  convertToKRW,
  translateNumericToKor,
} from './utils';

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
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const UnsavedProfile = {
    isNew: true,
    name: '신형탁',
    age: '29',
    monthlySavings: 5000,
    currentBalance: 10000,
  };

  const incompleteObject = {
    isNew: true,
    name: '신형탁',
    age: '',
    monthlySavings: 0,
    currentBalance: 0,
  };

  expect(isExist(object)).toBeTruthy();
  expect(isExist(UnsavedProfile)).toBeTruthy();

  expect(isExist(incompleteObject)).toBeFalsy();
});

test('filterObject', () => {
  const object = {
    isNew: false,
    name: '신형탁',
    age: 29,
    salary: '5000',
    asset: '10000',
  };

  const legacyKeys = ['salary', 'asset'];

  const newKeys = ['monthlySavings', 'currentBalance'];

  const result = {
    isNew: false,
    name: '신형탁',
    age: 29,
    monthlySavings: 0,
    currentBalance: 0,
  };

  expect(filterObject({ object, legacyKeys, newKeys })).toEqual(result);
});

test('convertToKRW', () => {
  const price = 5000;

  expect(convertToKRW(price)).toBe('₩5,000');
});

test('translateNumericToKor', () => {
  const text = '5000';

  expect(translateNumericToKor(text)).toBe('5,000만');

  expect(translateNumericToKor(text)).not.toBe('오천만');
  expect(translateNumericToKor(text)).not.toBe('5000만');
});
