import {createSlice} from '@reduxjs/toolkit';
import fakeData from 'fakeData';

const initialState = {
  savedLetters: fakeData.data,
};

const letterSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    sendLetter: (state, action) => {
      return {
        ...state,
        savedLetters: [...state.savedLetters, action.payload],
      };
    },

    deleteLetter: (state, action) => {
      const deleteTargetId = action.payload;
      const deletedTargetLetters = state.savedLetters.filter(item => {
        return item.id !== deleteTargetId;
      });
      return {
        ...state,
        savedLetters: deletedTargetLetters,
      };
    },

    modifyLetter: (state, action) => {
      const modifyTargetId = action.payload.id;
      const modifiedContent = action.payload.modifiedContent;
      const modifiedTargetLetters = state.savedLetters.map(item => {
        if (item.id === modifyTargetId) {
          return {...item, content: modifiedContent};
        } else return item;
      });
      return {
        ...state,
        savedLetters: modifiedTargetLetters,
      };
    },
  },
});

export const {sendLetter, deleteLetter, modifyLetter} = letterSlice.actions;
export default letterSlice.reducer;
