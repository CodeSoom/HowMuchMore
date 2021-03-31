import reducer, { setUserFields, changeUserFields } from './appSlice';

import { initialUserField } from '../fixtures/initials';

describe('setUserFields', () => {
  it('sets user field with isNew as false', () => {
    const initialState = {
      userFields: {
        ...initialUserField,
      },
    };

    const userFields = {
      isNew: false,
      name: 'Tak',
      age: 29,
      salary: 5000,
      asset: 10000,
    };

    const state = reducer(initialState, setUserFields(userFields));

    expect(state.userFields).toEqual(userFields);
  });
});

describe('changeUserFields', () => {
  context('when name is changed', () => {
    it('changes only user name', () => {
      const initialState = {
        userFields: {
          name: '신형탁',
          age: 29,
          salary: 5000,
          asset: 10000,
        },
      };

      const state = reducer(
        initialState,
        changeUserFields({
          name: 'name',
          value: 'ashal',
        }),
      );

      expect(state.userFields.name).toBe('ashal');
      expect(state.userFields.age).toBe(29);
      expect(state.userFields.salary).toBe(5000);
      expect(state.userFields.asset).toBe(10000);
    });
  });

  context('when salary is changed', () => {
    it('changes only user salary', () => {
      const initialState = {
        userFields: {
          name: '신형탁',
          age: 29,
          salary: 5000,
          asset: 10000,
        },
      };

      const state = reducer(
        initialState,
        changeUserFields({
          name: 'salary',
          value: 7000,
        }),
      );

      expect(state.userFields.salary).toBe(7000);
      expect(state.userFields.name).toBe('신형탁');
      expect(state.userFields.age).toBe(29);
      expect(state.userFields.asset).toBe(10000);
    });
  });
});
