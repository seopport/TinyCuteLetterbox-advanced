import {createSlice} from '@reduxjs/toolkit';
import {useState} from 'react';

const initialState = {
  users: {
    id: null,
    password: null,
    nickname: null,
    accessToken: null,
  },

  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      return {...state, users: action.payload};
    },

    changeLoginState: (state, action) => {
      return {...state, isLoggedIn: !state.isLoggedIn};
    },
  },
});

export const {updateUserInfo, updateUserToken, changeLoginState} = authSlice.actions;
export default authSlice.reducer;
