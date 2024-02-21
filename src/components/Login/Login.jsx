import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SelectCharacter} from 'components/Home/LetterBoxSelecter';
import {AuthActionButton} from './AuthActionButton';
import {useDispatch} from 'react-redux';
import {updateUserInfo} from 'store/redux/modules/authSlice';
import {useNavigate} from 'react-router-dom';
import loginApi from '../../apis/loginApi';
import {LoginContainer} from './LoginContainer';
import profileImg from 'assets/image/momongaProfile.jpg';

const Login = ({setIsSignUpAcitve, isValidId, isValidPw, checkIdValue, checkPwValue}) => {
  const dispacth = useDispatch();
  const navigate = useNavigate();

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

  const handleLoginButtonclick = async () => {
    if (!isValid) {
      return;
    }

    const userInfo = {id: userId, password: userPw};

    try {
      const response = await loginApi.post('/login', userInfo);
      const {accessToken, nickname, avatar} = response.data;
      alert('💌 로그인되었습니다. 홈으로 이동합니다.');

      const newUser = {
        id: userId,
        password: userPw,
        nickname,
        accessToken,
        avatar: avatar ? avatar : profileImg,
      };

      localStorage.setItem('accessToken', `${accessToken}`);
      localStorage.setItem('storageUserInfo', JSON.stringify(newUser));

      dispacth(updateUserInfo(newUser));
      navigate('/home');
    } catch (error) {
      console.log('error response :', error.response);
      if (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <LoginContainer>
      <p style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '40px'}}>로그인</p>

      <form type="submit" style={{width: '100%'}}>
        <StInputContainer>
          <StLoginInput
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            maxLength={10}
            placeholder="아이디 (4~10글자 영문으로 입력해주세요.)"
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
      <AuthActionButton onClick={handleLoginButtonclick} $isValid={isValid} type="submit">
        로그인
      </AuthActionButton>
      <DefaultButton onClick={handleSignButtonClick}> 회원가입 </DefaultButton>
    </LoginContainer>
  );
};

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

export default Login;
