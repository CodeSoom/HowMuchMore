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
        monthlySavings: parseInt((userFields.monthlySavings).replace(',', ''), 10).toLocaleString(),
        currentBalance: parseInt((userFields.currentBalance).replace(',', ''), 10).toLocaleString(),
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

      const price = (APARTMENT_PRICE - parseInt((userFields.currentBalance), 10)).toLocaleString();
      const year = Math.floor((APARTMENT_PRICE / (parseInt((userFields.monthlySavings).replace(',', ''), 10) * 12)));
      const age = Math.floor((parseInt(userFields.age, 10) + year));

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
