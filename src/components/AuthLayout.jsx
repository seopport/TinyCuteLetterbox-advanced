import React, {useEffect, useState} from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import ResetStyles from './ResetStyles';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import NavHeader from './NavHeader';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserInfo, updateUserToken} from 'store/redux/modules/authSlice';

const LayoutWrap = styled.div`
  width: 710px;
  min-height: 961px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddf2f9;
  padding-bottom: 50px;
`;
const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eef9fd;
`;

function AuthLayout() {
  console.log('AuthLayout 렌더링');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRendered, setIsRendered] = useState(false);

  // 렌더링 될 때 마다 토큰 업데이트 - 새로고침 했을 때 토큰 유지
  const accessToken = localStorage.getItem('accessToken');
  dispatch(updateUserToken(accessToken));

  // 렌더링 될 때 마다 유저 정보 업데이트 - 새로고침 했을 때 유저 정보 유지
  const storageUserInfo = localStorage.getItem('storageUserInfo');
  const parsedUserInfo = JSON.parse(storageUserInfo);
  dispatch(updateUserInfo(parsedUserInfo));

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
      return;
    }
    //useEffect가 실행된 후 컴포넌트 렌더링(보안을 위해)
    // 1. 브라우저 렌더링 -> useEffect 실행 -> isRendered = true -> 컴포넌트 렌더링됨
    setIsRendered(true);
  }, [accessToken, navigate]);

  return (
    <MainWrap>
      <ResetStyles />
      <LayoutWrap>
        {isRendered && <NavHeader />}
        <Header />
        {isRendered && <Outlet />}
      </LayoutWrap>
    </MainWrap>
  );
}

export default AuthLayout;
