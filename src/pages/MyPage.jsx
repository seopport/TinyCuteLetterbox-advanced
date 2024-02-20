import {ModifyButton} from 'components/Detail/ModifyButton';
import {LoginContainer} from 'components/Login/LoginContainer';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const MyPage = () => {
  const userInfo = useSelector(state => state.authSlice.users);
  //토큰이 백엔드에 있어야 요청을 보낼지 안보낼지 결정
  //토큰 검정 실패시 로그아웃으로 바꿔버려

  const [isModifying, setIsModifying] = useState(false);

  return (
    <LoginContainer style={{padding: '30px 20px 15px 30px'}}>
      <StTitle>프로필 관리</StTitle>
      {console.log(userInfo)}
      <StProfileContainer>
        <StProfileImage src="https://f4.bcbits.com/img/a3746752716_65" />
        <div style={{margin: 'auto 0'}}>
          <StInfoWrap style={{marginBottom: '20px'}}>
            <StSpan>아이디</StSpan>
            <StInfo>{userInfo.id}</StInfo>
          </StInfoWrap>
          <StInfoWrap>
            <StSpan>닉네임</StSpan>
            <StInfoInput value={userInfo.nickname} style={{backgroundColor: 'white'}} readOnly>
              {}
            </StInfoInput>
          </StInfoWrap>
        </div>
      </StProfileContainer>
      {/* id: 
      password: {userInfo.password}
      nickname: 
      accessToken: {userInfo.accessToken} */}
      <ModifyButton> 수정 </ModifyButton>
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
