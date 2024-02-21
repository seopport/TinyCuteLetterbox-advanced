import character from '../modules/characterSlice';
import letters from '../modules/letterSlice';
import authSlice from '../modules/authSlice';

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    character,
    letters,
    authSlice,
  },
});

export default store;
