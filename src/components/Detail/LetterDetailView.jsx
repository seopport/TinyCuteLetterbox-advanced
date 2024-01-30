import React from 'react'
import styled from 'styled-components'
import colors from 'shared/color'
import profileImg from 'assets/default_profile_bear.png';
import sleepyMomonga from "assets/sleepy_momonga.png"

const StLetterSendingBox = styled.div`
    background-color: white;
    width: 475px;
    min-height: 235px;
    border-radius: 11px;
    border: 1px solid ${colors.bordeGreyishBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "NPSfont-regular";
    position: relative;
    margin: 80px;
    padding: 10px 20px 10px 20px;
    `
const ProfileImg = styled.img`
    width: 45px;
    margin-right: 5px;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
`

const WriteLetterBox = styled.div`
    width: 100%;
    height: 130px;
    margin: 7px;
    border-radius: 7px;
    padding: 15px;
    border: 1px solid ${colors.bordeGreyishBlue};
    background-color: ${colors.skyBlue};
    font-size: 14px;
    `
const MomongaOnBox = styled.img`
    width: 70px;
    position: absolute;
    top: -57px;
    right: 20px;
    `
const BackButton = styled.button`
    margin: 10px;
    align-self: flex-end;
    font-family: "NPSfont-regular";
    padding: 10px;
    width: 88px;
    height: 35px;
    background-color: white;
    border: 1px solid ${colors.bordeGreyishBlue};
    color: #4D86A6;
    border-radius: 9px;
    line-height: 100%;
        
    &:hover {
            cursor: pointer;
        }
    `



function LetterDetailView() {
    return (
        <>
            <BackButton>돌아가기</BackButton>
            <StLetterSendingBox>
                <ProfileBox >
                    <ProfileImg src={profileImg} />
                    <span style={{ lineHeight: "normal" }}>닉네임</span>
                </ProfileBox>
                <MomongaOnBox src={sleepyMomonga}></MomongaOnBox>
                <WriteLetterBox>
                    <p style={{ marginBottom: "10px" }}>Dear. dkdkdk</p>
                    <p>야 만나서 반갑다 친구야</p>
                </WriteLetterBox>
            </StLetterSendingBox >
        </>
    )
}

export default LetterDetailView