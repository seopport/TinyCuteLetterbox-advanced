import {createSlice} from '@reduxjs/toolkit';
import {useState} from 'react';

const initialState = {
  users: [
    {
      id: '1234',
      password: '1234',
      nickname: null,
      accessToken: null,
    },
  ],

  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      //페이로드 : userId, Pw, 닉네임 객체
      return {...state, users: [...state.users, action.payload]};
    },

    changeLoginState: (state, action) => {
      return {...state, isLoggedIn: !state.isLoggedIn};
    },
  },
});

export const {addUser, changeLoginState} = authSlice.actions;
export default authSlice.reducer;
