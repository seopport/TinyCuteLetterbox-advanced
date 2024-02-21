import React, {useEffect, useState} from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import ResetStyles from './ResetStyles';
import {Outlet, useNavigate} from 'react-router-dom';

function NonAuthLayout() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (accessToken) {
      alert('잘못된 접근입니다. 로그아웃 후 시도해주세요.');
      navigate('/home');
    }

    setIsRendered(true);
  }, [isRendered, navigate, accessToken]);

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

export default NonAuthLayout;
