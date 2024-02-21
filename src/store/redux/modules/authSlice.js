import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: {
    id: null,
    password: null,
    nickname: null,
    accessToken: null,
    avatar: null,
  },

  // isLoggedIn: false,
  // accessToken: null,
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

export const {modifyUserInfo, modifyUserAvatar, updateUserInfo, changeLoginState} = authSlice.actions;
export default authSlice.reducer;
