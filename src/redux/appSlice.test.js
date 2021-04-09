import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import reducer, {
  setUserFields,
  changeUserFields,
  setApartments,
  setApartment,
  setEstimation,
  loadApartments,
} from './appSlice';

import { initialUserField } from '../fixtures/initials';

jest.mock('../services/api');

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

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
      age: '29',
      salary: '5000',
      asset: '10000',
    };

    const newUserFields = {
      isNew: false,
      name: 'Tak',
      age: '29',
      salary: '5,000',
      asset: '10,000',
    };

    const state = reducer(initialState, setUserFields(userFields));

    expect(state.userFields).toEqual(newUserFields);
  });
});

describe('changeUserFields', () => {
  context('when name is changed', () => {
    it('changes only user name', () => {
      const initialState = {
        userFields: {
          name: '신형탁',
          age: '29',
          salary: '5000',
          asset: '10000',
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
      expect(state.userFields.age).toBe('29');
      expect(state.userFields.salary).toBe('5000');
      expect(state.userFields.asset).toBe('10000');
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

describe('setApartments', () => {
  it('changes lists of apartments', () => {
    const initialState = {
      aparatments: [],
    };

    const APARTMENTS = [
      {
        id: 1,
        name: '아크로리버파크',
        date: '2021-03',
        area: '129.92',
        price: '470,000',
      },
      {
        id: 2,
        name: '서울',
        date: '2021-02',
        area: '200.27',
        price: '420,000',
      },
    ];

    const state = reducer(initialState, setApartments(APARTMENTS));

    expect(state.apartments[0].name).toBe('아크로리버파크');
    expect(state.apartments[0].price).toBe('470,000');
    expect(state.apartments[0].area).toBe('129.92');

    expect(state.apartments).toHaveLength(2);
  });
});

describe('setApartment', () => {
  it('changes apartment', () => {
    const initialState = {
      apartment: {},
    };

    const apartment = {
      name: '아크로리버파크',
      date: '2021-03',
      area: '129.92',
      price: '470,000',
      lotNumber: 1,
    };

    const state = reducer(initialState, setApartment(apartment));

    expect(state.apartment).toEqual(apartment);
  });
});

describe('setEstimation', () => {
  it('changes esitmation', () => {
    const initialState = {
      userFields: {
        age: '29',
        salary: '5000',
        asset: '10000',
      },
      apartment: {
        price: '470,000',
      },
      esitmation: {},
    };

    const state = reducer(initialState, setEstimation());

    expect(state.estimation.price).toBe('460,000');
    expect(state.estimation.year).toBe(94);
    expect(state.estimation.age).toBe(123);
  });
});

describe('loadApartments', () => {
  const store = mockStore({});

  it('dispatch setApartments', async () => {
    await store.dispatch(loadApartments('riverside'));

    const actions = store.getActions();

    expect(actions[0]).toEqual(setApartments([]));
    expect(actions[1]).toEqual(setApartments([
      {
        name: '아크로리버파크',
        date: '2021-03',
        area: '129.92',
        price: '470,000',
        lotNumber: 1,
      },
      {
        name: '서울',
        date: '2021-02',
        area: '200.27',
        price: '420,000',
        lotNumber: 2,
      },
    ]));
  });
});
