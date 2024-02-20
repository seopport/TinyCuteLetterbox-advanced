import Login from 'components/Login/Login';
import SignUp from 'components/Login/SignUp';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const [isSignUpAcitve, setIsSignUpAcitve] = useState(false);
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);

  const navigate = useNavigate();
  if (isLoggedIn) {
    navigate('/home');
    return;
  }

  const checkIdValue = idValue => {
    if (idValue.length >= 4) {
      setIsValidId(true);
    } else setIsValidId(false);
    return isValidId;
  };

  const checkPwValue = pwValue => {
    if (pwValue.length >= 4) {
      setIsValidPw(true);
    } else setIsValidPw(false);
    return isValidId;
  };

  return (
    <>
      {!isSignUpAcitve ? (
        <Login
          checkPwValue={checkPwValue}
          checkIdValue={checkIdValue}
          isValidPw={isValidPw}
          isValidId={isValidId}
          setIsSignUpAcitve={setIsSignUpAcitve}
        />
      ) : (
        <SignUp
          checkPwValue={checkPwValue}
          checkIdValue={checkIdValue}
          isValidPw={isValidPw}
          isValidId={isValidId}
          setIsSignUpAcitve={setIsSignUpAcitve}
        />
      )}
    </>
  );
};

export default LoginPage;
