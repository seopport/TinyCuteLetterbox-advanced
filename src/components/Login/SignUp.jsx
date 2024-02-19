import React, { useEffect, useState } from 'react'
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
padding: 0 10px;
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

export const StSignButton = styled(SelectCharacter)`
    color: ${(props) => props.$isValid ? "white" : colors.bordeGreyishBlue};
    background-color: ${(props) => props.$isValid ? colors.aquaBlue : "white"};
    transition: all 0.3s;

    &:hover{
        cursor: ${(props) => props.isValid ? "pointer" : "default"};
    }

    width: 100%;
    height: 45px;
    font-size: 16px;
    margin-top: 10px;
`

export const StMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    left: 5px;
    top: 55px;

`

export const StInputContainer = styled.div`
    margin-bottom: 30px;
    position: relative;
    
    
`

// 시간늠으면 고려 : 닉네임, 아이디 숫자만 입력 안되게

const Login = ({ setIsSignUpAcitve, isValidId, isValidPw, checkIdValue, checkPwValue }) => {
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
    }, [isValidId, isValidPw, userNickname, userId, userPw])

    const handleLoginButtonClick = () => {
        setIsSignUpAcitve(false)
    }

    const handleUserIdChange = (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9]/ig, '');
        setUserId(e.target.value);
    }


    const handleUserPwChange = (e) => {
        setUserPw(e.target.value);
    }
    const handleUserNicknameChange = (e) => {
        setUserNickname(e.target.value);

    }



    return (
        <>
            <LoginContainer>
                <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "30px" }}>회원가입</p>

                <form style={{ width: "100%" }}>
                    <StInputContainer>
                        <StLoginInput type="text" value={userId} onChange={handleUserIdChange} placeholder='아이디 (4~10글자)' maxLength={10} />
                        {!isValidId && userId.length > 0 && <StMessage>4글자 이상 입력하세요.</StMessage>}
                    </StInputContainer>
                    <StInputContainer>
                        <StLoginInput type='password' value={userPw} onChange={handleUserPwChange} placeholder='비밀번호 (4~15글자)' maxLength={15} />
                        {!isValidPw && userPw.length > 0 && <StMessage> 4글자 이상 입력하세요.</StMessage>}
                    </StInputContainer>
                    <StInputContainer><StLoginInput value={userNickname} onChange={handleUserNicknameChange} placeholder='닉네임 (1~10글자)' maxLength={10} /></StInputContainer>

                </form>
                <StSignButton $isValid={isValid} type='submit'> 회원가입 </StSignButton>
                <DefaultButton onClick={handleLoginButtonClick}> 로그인 </DefaultButton>
            </LoginContainer >

        </>
    )
}

export default Login