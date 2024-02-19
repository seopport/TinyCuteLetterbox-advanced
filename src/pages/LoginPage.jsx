import Login from 'components/Login/Login'
import SignUp from 'components/Login/SignUp'
import React, { useState } from 'react'

const LoginPage = () => {


    return (
        <div>
            여기는 로그인 페이지
            <Login />
            <SignUp />
        </div>
    )
}

export default LoginPage