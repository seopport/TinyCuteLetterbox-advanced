import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SelectCharacter} from 'components/Home/LetterBoxSelecter';
import colors from 'shared/color';
import {StSignButton} from './SignUp';
import {AuthActionButton} from './AuthActionButton';

export const LoginContainer = styled.div`
  margin-top: 50px;
  width: 70%;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const StLoginInput = styled.input`
  border-radius: 10px;
  border: 1px solid grey;
  width: 100%;
  height: 50px;
  font-size: 14px;
  padding: 0 10px;
`;

export const DefaultButton = styled(SelectCharacter)`
  color: #9e9e9e;
  background-color: white;
  border: 1px solid grey;
  width: 100%;
  height: 45px;
  font-size: 16px;
  margin-top: 10px;
`;

export const StMessage = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  left: 5px;
  top: 55px;
`;

export const StInputContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const Login = ({setIsSignUpAcitve, isValidId, isValidPw, checkIdValue, checkPwValue}) => {
  const [isValid, setIsValid] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  useEffect(() => {
    checkIdValue(userId);
    checkPwValue(userPw);
    if (isValidId && isValidPw) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isValidId, isValidPw, userId, userPw]);

  const handleSignButtonClick = () => {
    setIsSignUpAcitve(true);
  };

  const handleUserIdChange = e => {
    e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
    setUserId(e.target.value);
  };

  const handleUserPwChange = e => {
    setUserPw(e.target.value);
  };

  return (
    <LoginContainer>
      <p style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '40px'}}>로그인</p>

      <form style={{width: '100%'}}>
        <StInputContainer>
          <StLoginInput
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            maxLength={10}
            placeholder="아이디 (영문 4~10글자)"
          />
          {!isValidId && userId.length > 0 && <StMessage>4글자 이상 입력하세요.</StMessage>}
        </StInputContainer>
        <StInputContainer>
          <StLoginInput
            type="password"
            value={userPw}
            onChange={handleUserPwChange}
            placeholder="비밀번호 (4~15글자)"
            maxLength={15}
          />
          {!isValidPw && userPw.length > 0 && <StMessage> 4글자 이상 입력하세요.</StMessage>}
        </StInputContainer>
      </form>
      <AuthActionButton $isValid={isValid} type="submit">
        {' '}
        로그인{' '}
      </AuthActionButton>
      <DefaultButton onClick={handleSignButtonClick}> 회원가입 </DefaultButton>
    </LoginContainer>
  );
};

export default Login;
