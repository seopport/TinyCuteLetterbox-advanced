import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import {updateUserToken} from 'store/redux/modules/authSlice';
import styled from 'styled-components';

const NavHeader = () => {
  const accessToken = useSelector(state => state.authSlice.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginStateButton = () => {
    if (accessToken) {
      if (window.confirm('로그아웃하시겠습니까?')) {
        localStorage.clear();
        dispatch(updateUserToken(null));
        navigate('/login');
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
  }
`;

export default NavHeader;
