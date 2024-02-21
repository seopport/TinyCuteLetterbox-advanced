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
  accessToken: null,
  //여기서 들어온 액세스 토큰은 로그인할 때 들어옴
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      console.log('업데이트 유저인포 리듀서 실행!!!!!!!!!!!!!');
      return {...state, users: action.payload};
    },

    updateUserToken: (state, action) => {
      console.log('업데이트 토큰 리듀서 실행');
      return {...state, accessToken: action.payload};
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
