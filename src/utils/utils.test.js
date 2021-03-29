import { get } from './utils';

test('get', () => {
  const state = {
    name: '신형탁',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('신형탁');
  expect(g(state)).toBeUndefined();
});
