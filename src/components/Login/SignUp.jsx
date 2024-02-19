import React from 'react'
import styled from 'styled-components'
import { SelectCharacter } from 'components/Home/LetterBoxSelecter';
import colors from 'shared/color';

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

export const LoginButton = styled(SelectCharacter)`
        color: white;
    background-color: ${colors.aquaBlue};

    &:active{
        background-color: #0b75b3;
    }
    width: 100%;
    height: 45px;
    font-size: 16px;
    margin-top: 10px;
`


const Login = ({ setIsSignUpAcitve }) => {
    const handleLoginButtonClick = () => {
        setIsSignUpAcitve(false)
    }

    return (
        <>
            <LoginContainer>
                <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "30px" }}>회원가입</p>

                <form style={{ width: "100%" }}>
                    <StLoginInput placeholder='아이디 (4~10글자)' />
                    <StLoginInput placeholder='비밀번호 (4~15글자)' />
                    <StLoginInput placeholder='닉네임 (1~10글자)' />

                </form>
                <LoginButton > 회원가입 </LoginButton>
                <LoginButton onClick={handleLoginButtonClick}
                    style={{ color: `${colors.bordeGreyishBlue}`, backgroundColor: "white" }}> 로그인 </LoginButton>
            </LoginContainer>

        </>
    )
}

export default Login