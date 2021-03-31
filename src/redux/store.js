import { configureStore } from '@reduxjs/toolkit';

import reducer from './appSlice';

const store = configureStore({ reducer });

export default store;
