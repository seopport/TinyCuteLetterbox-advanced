import React, {useEffect, useState} from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import ResetStyles from './ResetStyles';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import NavHeader from './NavHeader';
import {useSelector} from 'react-redux';

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

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);

  const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);
  console.log('로그인합격', isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    //useEffect가 실행된 후 컴포넌트 렌더링(보안을 위해)
    // 1. 브라우저 렌더링 -> useEffect 실행 -> isRendered = true -> 컴포넌트 렌더링됨
    setIsRendered(true);
  }, [isLoggedIn, navigate]);

  return (
    <MainWrap>
      <ResetStyles />
      <LayoutWrap>
        {isLoggedIn && <NavHeader />}
        <Header />
        {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
      </LayoutWrap>
    </MainWrap>
  );
}

export default AuthLayout;
