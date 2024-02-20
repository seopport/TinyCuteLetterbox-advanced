import React from 'react';
import {useSelector} from 'react-redux';

const MyPage = () => {
  const userInfo = useSelector(state => state.authSlice.users);
  //토큰이 백엔드에 있어야 요청을 보낼지 안보낼지 결정
  //토큰 검정 실패시 로그아웃으로 바꿔버려

  return (
    <div>
      {console.log(userInfo)}
      id: {userInfo.id}
      password: {userInfo.password}
      nickname: {userInfo.nickname}
      accessToken: {userInfo.accessToken}
    </div>
  );
};

export default MyPage;
