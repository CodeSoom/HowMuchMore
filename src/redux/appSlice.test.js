import reducer, { setUserFields } from './appSlice';

import { initialUserField } from '../fixtures/initials';

describe('setUserFields', () => {
  it('changes fields', () => {
    const initialState = {
      userFields: {
        ...initialUserField,
      },
    };

    const userFields = {
      name: 'Tak',
      age: '29',
      salary: 5000,
      asset: 10000,
    };

    const state = reducer(initialState, setUserFields(userFields));

    expect(state.userFields).toEqual(userFields);
  });
});
