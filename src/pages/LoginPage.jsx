import Login from 'components/Login/Login'
import SignUp from 'components/Login/SignUp'
import React, { useState } from 'react'

const LoginPage = () => {
    const [isSignUpAcitve, setIsSignUpAcitve] = useState(false);
    const [isValidId, setIsValidId] = useState(false);
    const [isValidPw, setIsValidPw] = useState(false);


    const checkIdValue = (idValue) => {
        if (idValue.length >= 4) {
            setIsValidId(true);
        } else setIsValidId(false);
        console.log("id", isValidId)
        return isValidId;
    }

    const checkPwValue = (pwValue) => {
        if (pwValue.length >= 4) {
            setIsValidPw(true);
        } else setIsValidPw(false);
        return isValidId;
    }

    return (
        <>
            여기는 로그인 페이지
            {!isSignUpAcitve
                ? <Login checkIdValue={checkIdValue} setIsSignUpAcitve={setIsSignUpAcitve} />
                : <SignUp checkPwValue={checkPwValue} checkIdValue={checkIdValue} isValidPw={isValidPw} isValidId={isValidId} setIsSignUpAcitve={setIsSignUpAcitve} />
            }
        </>
    )
}

export default LoginPage