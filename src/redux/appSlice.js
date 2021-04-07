import { createSlice } from '@reduxjs/toolkit';

import {
  initialUserField,
  initialApartment,
  initialEstimation,
} from '../fixtures/initials';

import { fetchApartments } from '../services/api';

import { saveItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'applications',
  initialState: {
    userFields: {
      ...initialUserField,
    },
    apartments: [],
    apartment: {
      ...initialApartment,
    },
    estimation: {
      ...initialEstimation,
    },
  },
  reducers: {
    setUserFields(state, { payload: userFields }) {
      const profile = {
        ...userFields,
        isNew: false,
      };

      saveItem('profile', JSON.stringify(profile));

      return {
        ...state,
        userFields: profile,
      };
    },

    changeUserFields(state, { payload: { name, value } }) {
      return {
        ...state,
        userFields: {
          ...state.userFields,
          [name]: value,
        },
      };
    },

    setApartments(state, { payload: apartments }) {
      return {
        ...state,
        apartments,
      };
    },

    setApartment(state, { payload: apartment }) {
      saveItem('apartment', JSON.stringify(apartment));

      return {
        ...state,
        apartment,
      };
    },

    setEstimation(state) {
      const { apartment, userFields } = state;
      const price = (apartment.price - parseInt(userFields.asset, 10));
      const year = (apartment.price / parseInt(userFields.salary, 10));
      const age = (parseInt(userFields.age, 10) + year);

      return {
        ...state,
        estimation: {
          price,
          year,
          age,
        },
      };
    },

  },
});

export const {
  setUserFields,
  changeUserFields,
  setApartments,
  setApartment,
  setEstimation,
} = actions;

export function loadApartments(apartmentCategory) {
  return async (dispatch) => {
    dispatch(setApartments([]));

    const apartments = await fetchApartments({ apartmentCategory });

    dispatch(setApartments(apartments));
  };
}

export default reducer;
