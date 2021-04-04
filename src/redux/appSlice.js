import { createSlice } from '@reduxjs/toolkit';

import { initialUserField } from '../fixtures/initials';

import { fetchApartments } from '../services/api';

import { saveItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'applications',
  initialState: {
    userFields: {
      ...initialUserField,
    },
    apartments: [],
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

    setApartment(state, { payload: apartments }) {
      return {
        ...state,
        apartments,
      };
    },

  },
});

export const { setUserFields, changeUserFields, setApartment } = actions;

export function loadApartments(apartmentCategory) {
  return async (dispatch) => {
    dispatch(setApartment([]));

    const apartments = await fetchApartments({ apartmentCategory });

    dispatch(setApartment(apartments));
  };
}

export default reducer;
