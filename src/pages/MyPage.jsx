import React from 'react';
import {useSelector} from 'react-redux';

const MyPage = () => {
  const userInfo = useSelector(state => state.authSlice.users);

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
