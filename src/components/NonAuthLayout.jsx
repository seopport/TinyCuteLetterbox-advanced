import React, {useEffect, useState} from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import ResetStyles from './ResetStyles';
import {Outlet, useNavigate} from 'react-router-dom';
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

function NonAuthLayout() {
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);

  const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);

  console.log('isRendered', isRendered);
  console.log('nonAuthLayout 렌더링');
  console.log('로그인합격', isLoggedIn);

  // 시간남으면 고려: 토큰 존재 여부로 조건걸기
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
      return;
    }

    setIsRendered(true);
  }, [isLoggedIn, navigate]);

  return (
    <MainWrap>
      <ResetStyles />
      <LayoutWrap>
        <Header />
        {isRendered ? <Outlet /> : null}
      </LayoutWrap>
    </MainWrap>
  );
}

export default NonAuthLayout;
