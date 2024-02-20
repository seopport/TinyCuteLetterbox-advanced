import {createSlice} from '@reduxjs/toolkit';
import {useState} from 'react';

const initialState = {
  users: {
    id: null,
    password: null,
    nickname: null,
    accessToken: null,
    avatar: null,
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

    modifyNickname: (state, action) => {
      // 유저 여러명일 떄 필요 근데 클라이언트에서 유저가 여러명일 수 가 있나?
      // const targetUserId = action.payload.userId;
      const modifiedNickname = action.payload.modifiedNickname;

      const updateUser = {
        ...state.users,
        nickname: modifiedNickname,
      };

      return {...state, users: updateUser};
    },
  },
});

export const {modifyNickname, updateUserInfo, updateUserToken, changeLoginState} = authSlice.actions;
export default authSlice.reducer;
