import React from 'react'
import styled from 'styled-components'
import colors from 'shared/color'
import profileImg from 'assets/default_profile_bear.png';
import { ChiikawaOnBox } from 'components/Main/LetterSendingBox';
import meltingChiikawa from "assets/melting_chiikawa.png"

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
        margin: 40px;
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


function LetterDetailView() {
    return (
        <StLetterSendingBox>
            <ProfileBox >
                <ProfileImg src={profileImg} />
                <span style={{ lineHeight: "normal" }}>닉네임</span>
            </ProfileBox>
            <ChiikawaOnBox src={meltingChiikawa}></ChiikawaOnBox>
            <WriteLetterBox>
                <p style={{ marginBottom: "10px" }}>Dear. dkdkdk</p>
                <p>야 만나서 반갑다 친구야</p>
            </WriteLetterBox>
        </StLetterSendingBox >
    )
}

export default LetterDetailView