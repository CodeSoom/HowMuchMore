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
    isPyeong: false,
  },
  reducers: {
    setUserFields(state, { payload: userFields }) {
      const profile = {
        ...userFields,
        monthlySavings: parseInt((userFields.monthlySavings), 10),
        currentBalance: parseInt((userFields.currentBalance), 10),
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
        apartment: {
          ...apartment,
          price: parseInt((apartment.price), 10),
        },
      };
    },

    changeSizeUnit(state) {
      saveItem('KEY_SHOWING_PYEONG', !state.isPyeong);

      return {
        ...state,
        isPyeong: !state.isPyeong,
      };
    },

    setPyeong(state, { payload: KEY_SHOW_PYEONG }) {
      return {
        ...state,
        isPyeong: KEY_SHOW_PYEONG,
      };
    },

    setEstimation(state) {
      const { apartment, userFields } = state;

      const price = (apartment.price - parseInt((userFields.currentBalance), 10));
      const year = Math.floor((apartment.price / (parseInt((userFields.monthlySavings), 10) * 12)));
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
  changeSizeUnit,
  setPyeong,
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
