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

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
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

export default NonAuthLayout;
