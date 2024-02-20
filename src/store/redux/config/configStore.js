import character from '../modules/character';
import letters from '../modules/letters';
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
