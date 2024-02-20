import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import colors from 'shared/color';
import {changeLoginState} from 'store/redux/modules/authSlice';
import styled from 'styled-components';

const StNavHeaderContainer = styled.nav`
  width: 100%;
  height: 2.5rem;
  background-color: #63a0bd;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const StNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-family: 'UhBeeSe_hyun', serif;
  opacity: 50%;
  transition: all 0.2s;

  &:hover {
    opacity: 100%;
    /* transform: rotate(3deg); */
  }

  &.active {
    opacity: 100%;
  }
`;

const StLoginToggleButton = styled.div`
  background-color: transparent;
  border: none;
  color: white;
  text-decoration: none;
  font-family: 'UhBeeSe_hyun', serif;
  opacity: 50%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 100%;
    /* transform: rotate(3deg); */
  }
`;

const NavHeader = () => {
  const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);
  const dispatch = useDispatch();

  const handleLoginStateButton = () => {
    if (isLoggedIn) {
      if (window.confirm('로그아웃할거니?')) {
        dispatch(changeLoginState());
      } else {
        return;
      }
    }
  };

  return (
    <StNavHeaderContainer>
      <StNavLink to={'home'}>Home</StNavLink>
      <div style={{marginLeft: 'auto', display: 'flex'}}>
        <StNavLink to={'myPage'} style={{marginRight: '20px'}}>
          MyPage
        </StNavLink>
        <StLoginToggleButton onClick={handleLoginStateButton}>Logout</StLoginToggleButton>
      </div>
    </StNavHeaderContainer>
  );
};

export default NavHeader;
