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
            {!isSignUpAcitve
                ? <Login checkPwValue={checkPwValue} checkIdValue={checkIdValue} isValidPw={isValidPw} isValidId={isValidId} setIsSignUpAcitve={setIsSignUpAcitve} />
                : <SignUp checkPwValue={checkPwValue} checkIdValue={checkIdValue} isValidPw={isValidPw} isValidId={isValidId} setIsSignUpAcitve={setIsSignUpAcitve} />
            }
        </>
    )
}

export default LoginPage