import Login from 'components/Login/Login'
import SignUp from 'components/Login/SignUp'
import React, { useState } from 'react'

const LoginPage = () => {
    const [isSignUpAcitve, setIsSignUpAcitve] = useState(false);

    return (
        <>
            여기는 로그인 페이지
            {!isSignUpAcitve
                ? <Login setIsSignUpAcitve={setIsSignUpAcitve} />
                : <SignUp setIsSignUpAcitve={setIsSignUpAcitve} />
            }
        </>
    )
}

export default LoginPage