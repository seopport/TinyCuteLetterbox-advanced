import character from '../modules/character';
import letters from '../modules/letters';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    character,
    letters,
  },
});

export default store;
