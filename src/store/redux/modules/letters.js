import {createSlice} from '@reduxjs/toolkit';
import fakeData from 'fakeData';
import db from 'db.json';
import letterApi from 'apis/letterApi';
import {useState} from 'react';

const initialState = {
  savedLetters: [],
};

const letterSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    setLetter: (state, action) => {
      return {...state, savedLetters: action.payload};
    },

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

export const {setLetter, sendLetter, deleteLetter, modifyLetter} = letterSlice.actions;
export default letterSlice.reducer;
