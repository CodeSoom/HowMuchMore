import { createSlice } from '@reduxjs/toolkit';

import { initialUserField } from '../fixtures/initials';
import { saveItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'applications',
  initialState: {
    userFields: {
      ...initialUserField,
    },
  },
  reducers: {
    setUserFields(state, { payload: userFields }) {
      saveItem('profile', JSON.stringify({
        ...userFields,
        isNew: false,
      }));

      return {
        ...state,
        userFields,
      };
    },

  },
});

export const { setUserFields } = actions;

export default reducer;
