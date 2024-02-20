import {ModifyButton} from 'components/Detail/ModifyButton';
import {ModifyCancelButton} from 'components/Detail/ModifyCancelButton';
import {ModifyCompleteButton} from 'components/Detail/ModifyCompleteButton';
import {LoginContainer} from 'components/Login/LoginContainer';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {modifyNickname} from 'store/redux/modules/authSlice';
import styled from 'styled-components';
import loginApi from 'apis/loginApi';

const MyPage = () => {
  const userInfo = useSelector(state => state.authSlice.users);
  //토큰이 백엔드에 있어야 요청을 보낼지 안보낼지 결정
  //토큰 검정 실패시 로그아웃으로 바꿔버려

  const dispatch = useDispatch();

  const [isModifying, setIsModifying] = useState(false);
  const inputValue = useRef();
  const [modifiedNickname, setModifiedNickname] = useState('');

  const handleModifyButtonClick = () => {
    console.log('닉네임 :', userInfo.nickname, '수정한닉 : ', modifiedNickname);
    setIsModifying(true);
    setModifiedNickname(userInfo.nickname);
  };
  const handleModifyCompleteButtonClick = async () => {
    if (userInfo.nickname === modifiedNickname) {
      alert('수정사항없다');
      return;
    }

    // 닉네임 수정하는 디스패치
    dispatch(modifyNickname({userId: userInfo.id, modifiedNickname}));

    // 닉네임 수정 서버 patch
    const updateUserInfo = {nickname: modifiedNickname};
    const res = await loginApi.patch('/profile', updateUserInfo);
    alert(res.data.message);

    setIsModifying(false);
  };
  const handleModifyCancelButtonClick = () => {
    inputValue.current.value = userInfo.nickname;
    setIsModifying(false);
  };

  const handleNicknameInputChange = e => {
    console.log(modifiedNickname);
    setModifiedNickname(e.target.value);
  };

  return (
    <LoginContainer style={{padding: '30px 20px 15px 30px'}}>
      <StTitle>프로필 관리</StTitle>
      {console.log(userInfo)}
      <StProfileContainer>
        <StProfileImage src={userInfo.avatar} />
        <div style={{margin: 'auto 0'}}>
          <StInfoWrap style={{marginBottom: '20px'}}>
            <StSpan>아이디</StSpan>
            <StInfo>{userInfo.id}</StInfo>
          </StInfoWrap>
          <StInfoWrap>
            <StSpan>닉네임</StSpan>
            <StInfoInput
              onChange={handleNicknameInputChange}
              ref={inputValue}
              defaultValue={userInfo.nickname}
              style={{backgroundColor: 'white'}}
              readOnly={!isModifying}
            />
          </StInfoWrap>
        </div>
      </StProfileContainer>
      <div style={{alignSelf: 'flex-end', margin: '3px 3px 0 0'}}>
        {!isModifying ? (
          <ModifyButton onClick={handleModifyButtonClick}>수정</ModifyButton>
        ) : (
          <>
            <ModifyCompleteButton onClick={handleModifyCompleteButtonClick}>완료</ModifyCompleteButton>
            <ModifyCancelButton onClick={handleModifyCancelButtonClick}>취소</ModifyCancelButton>
          </>
        )}
      </div>
    </LoginContainer>
  );
};

export const StTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-right: auto;
`;

export const StProfileContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StProfileImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 7px;
  border: 1px solid black;
`;

export const StInfoWrap = styled.div`
  width: 240px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StInfo = styled.div`
  height: 100%;
  width: 80%;
  background-color: lightgrey;
  border: 1px solid black;
  font-size: 14px;
  line-height: normal;
  padding-left: 5px;
`;

export const StInfoInput = styled.input`
  height: 25px;
  width: 80%;
  background-color: lightgrey;
  border: 1px solid black;
  font-size: 14px;
  line-height: 25px;
  padding-left: 5px;
  outline: none;
`;

export const StSpan = styled.span`
  font-size: 14px;
`;

export default MyPage;
