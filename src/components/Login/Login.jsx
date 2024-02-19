import React, { useState } from 'react'
import styled from 'styled-components'
import { SelectCharacter } from 'components/Home/LetterBoxSelecter';
import colors from 'shared/color';
import { StSignButton } from './SignUp';

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

`

export const StLoginInput = styled.input`
border-radius: 10px;
border: 1px solid grey;
width: 100%;
height: 50px;
margin-bottom: 20px;
padding-left: 10px;
font-size: 14px;
`

export const DefaultButton = styled(SelectCharacter)`
    color: #9e9e9e;
    background-color: white;
    border: 1px solid grey;
    width: 100%;
    height: 45px;
    font-size: 16px;
    margin-top: 10px;
`

export const LoginButton = styled(StSignButton)`
`



const Login = ({ setIsSignUpAcitve }) => {


    const handleSignButtonClick = () => {
        setIsSignUpAcitve(true)
    }

    return (
        <LoginContainer>
            <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "30px" }}>로그인</p>

            <form style={{ width: "100%" }}>
                <StLoginInput placeholder='아이디 (4 ~ 10글자)' />
                <StLoginInput placeholder='비밀번호 (4 ~ 15글자)' />

            </form>
            <LoginButton > 로그인 </LoginButton>
            <DefaultButton onClick={handleSignButtonClick}
            > 회원가입 </DefaultButton>
        </LoginContainer>
    )
}

export default Login