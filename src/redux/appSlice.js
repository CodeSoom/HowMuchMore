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
        salary: parseInt((userFields.salary).replace(',', ''), 10).toLocaleString(),
        asset: parseInt((userFields.asset).replace(',', ''), 10).toLocaleString(),
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

      const APARTMENT_PRICE = parseInt((apartment.price).replace(',', ''), 10);

      const price = (APARTMENT_PRICE - parseInt((userFields.asset), 10)).toLocaleString();
      const year = (APARTMENT_PRICE / parseInt((userFields.salary).replace(',', ''), 10));
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
