import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      userId: null,
      userPw: null,
      userNickname: null,
      accessToken: null,
    },
  ],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      //페이로드 : userId, Pw, 닉네임 객체
      return [...state, action.payload];
    },

    checkUser: (state, action) => {
      //payload: 유저 아이디, pw
      const targetId = action.payload.userId;
      const targetPw = action.payload.userPw;
      state.users.map(item => {
        if (item.userId === targetId && item.userPw === targetPw) {
          //일치하면 로그인
          return true;
        } else return false;
      });
    },
  },
});

export const {addUser, checkUser} = authSlice.actions;
export default authSlice.reducer;
