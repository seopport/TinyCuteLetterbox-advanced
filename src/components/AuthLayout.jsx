import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import ResetStyles from './ResetStyles';
import { Outlet, useNavigate } from 'react-router-dom';
import NavHeader from './NavHeader';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from 'store/redux/modules/authSlice';
import { ModifyButton } from './Detail/ModifyButton';
import { DeleteButton } from './Detail/DeleteButton';

function AuthLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRendered, setIsRendered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 렌더링 될 때 마다 유저 정보 업데이트 - 새로고침 했을 때 유저 정보 유지
  const storageUserInfo = localStorage.getItem('storageUserInfo');
  const parsedUserInfo = JSON.parse(storageUserInfo);
  dispatch(updateUserInfo(parsedUserInfo));

  const accessToken = useSelector((state) => state.authSlice.users?.accessToken);

  useEffect(() => {
    if (!accessToken) {
      alert('⚠️ 잘못된 접근입니다.');
      navigate('/login');
      return;
    }
    //useEffect가 실행된 후 컴포넌트 렌더링(보안을 위해)
    // 1. 브라우저 렌더링 -> useEffect 실행 -> isRendered = true -> 컴포넌트 렌더링됨
    setIsRendered(true);
  }, [navigate]);

  const handleLogoutConfirmButtonClick = () => {
    localStorage.clear();
    dispatch(
      updateUserInfo({
        id: null,
        password: null,
        nickname: null,
        accessToken: null,
        avatar: null,
      })
    );
    setIsModalOpen(false);
    navigate('/login');
  };

  return (
    <>
      <ResetStyles />
      <MainWrap>
        <StModalWrap $isModalOpen={isModalOpen}>
          <ModalContainer>
            <StModalText>로그아웃하시겠습니까?</StModalText>
            <div>
              <ModifyButton onClick={handleLogoutConfirmButtonClick}>확인</ModifyButton>
              <DeleteButton onClick={() => setIsModalOpen(false)}>취소</DeleteButton>
            </div>
          </ModalContainer>
        </StModalWrap>
        <LayoutWrap>
          {isRendered && <NavHeader setIsModalOpen={setIsModalOpen} />}
          <Header />
          {isRendered && <Outlet />}
        </LayoutWrap>
      </MainWrap>
    </>
  );
}

const StModalWrap = styled.div`
  z-index: ${(props) => (props.$isModalOpen ? '10' : '-1')};
  width: 100%;
  min-height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  opacity: ${(props) => (props.$isModalOpen ? '1' : '0')};
`;

const StModalText = styled.span`
  font-family: sans-serif;
  font-size: 18px;
  margin: auto;
  text-align: center;
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 180px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
`;

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
  position: relative;
`;

export default AuthLayout;
