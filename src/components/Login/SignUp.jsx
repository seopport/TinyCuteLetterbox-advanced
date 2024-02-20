import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {LoginContainer, StLoginInput, DefaultButton, LoginButton, StMessage, StInputContainer} from './Login';
import {SelectCharacter} from 'components/Home/LetterBoxSelecter';
import colors from 'shared/color';
import {AuthActionButton} from './AuthActionButton';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from 'store/redux/modules/authSlice';

// 시간늠으면 고려 : 닉네임, 아이디 숫자만 입력 안되게

const Login = ({setIsSignUpAcitve, isValidId, isValidPw, checkIdValue, checkPwValue}) => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.authSlice.users);

  const [isValid, setIsValid] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNickname, setUserNickname] = useState('');

  useEffect(() => {
    checkIdValue(userId);
    checkPwValue(userPw);
    if (isValidId && isValidPw && userNickname.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isValidId, isValidPw, userNickname, userId, userPw]);

  const handleLoginButtonClick = () => {
    setIsSignUpAcitve(false);
  };

  const handleUserIdChange = e => {
    e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
    setUserId(e.target.value);
  };

  const handleUserPwChange = e => {
    setUserPw(e.target.value);
  };
  const handleUserNicknameChange = e => {
    setUserNickname(e.target.value);
  };

  const handleSignUpButtonClick = () => {
    if (!isValid) {
      return;
    }

    const newUser = {
      userId,
      userPw,
      userNickname,
      accessToken: null,
    };

    dispatch(addUser(newUser));
    alert('회원가입이 완료되었습니다.');
    setIsSignUpAcitve(false);
  };

  return (
    <>
      <LoginContainer>
        <p style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '40px'}}>회원가입</p>

        <form style={{width: '100%'}}>
          <StInputContainer>
            <StLoginInput
              type="text"
              value={userId}
              onChange={handleUserIdChange}
              placeholder="아이디 (영문 4~10글자)"
              maxLength={10}
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
          <StInputContainer>
            <StLoginInput
              value={userNickname}
              onChange={handleUserNicknameChange}
              placeholder="닉네임 (1~10글자)"
              maxLength={10}
            />
          </StInputContainer>
        </form>
        <AuthActionButton onClick={handleSignUpButtonClick} $isValid={isValid} type="submit">
          {' '}
          회원가입{' '}
        </AuthActionButton>
        <DefaultButton onClick={handleLoginButtonClick}> 로그인 </DefaultButton>
      </LoginContainer>
    </>
  );
};

export default Login;
