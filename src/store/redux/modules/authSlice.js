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

    modifyUserInfo: (state, action) => {
      // 유저 여러명일 떄 필요 근데 클라이언트에서 유저가 여러명일 수 가 있나?
      // const targetUserId = action.payload.userId;
      const modifiedNickname = action.payload.modifiedNickname;
      const modifiedAvatar = action.payload.modifiedAvatar;

      const updateUser = {
        ...state.users,
        nickname: modifiedNickname,
        avatar: modifiedAvatar,
      };

      return {...state, users: updateUser};
    },

    modifyUserAvatar: (state, action) => {
      const modifiedAvatar = action.payload.modifiedAvatar;
      console.log('모디파이드 사진', modifiedAvatar);

      const updateUser = {
        ...state.users,
        avatar: modifiedAvatar,
      };

      return {...state, users: updateUser};
    },
  },
});

export const {modifyUserInfo, modifyUserAvatar, updateUserInfo, updateUserToken, changeLoginState} = authSlice.actions;
export default authSlice.reducer;
