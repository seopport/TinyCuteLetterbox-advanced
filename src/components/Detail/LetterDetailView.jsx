import React from 'react'
import styled from 'styled-components'
import colors from 'shared/color'
import profileImg from 'assets/default_profile_bear.png';
import sleepyMomonga from "assets/sleepy_momonga.png"
import flowerChiikawa from "assets/chiikawa_w_flower.png"
import { useNavigate } from 'react-router-dom';
import { Date } from 'components/Main/LetterSummaryView';

const StLetterSendingBox = styled.div`
    box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.10);
    background-color: white;
    width: 475px;
    min-height: 240px;
    border-radius: 11px;
    border: 1px solid ${colors.bordeGreyishBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 40px;
    padding: 10px 20px 10px 20px;
`

const ProfileImg = styled.img`
    width: 45px;
    margin-right: 7px;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
        font-family: "NPSfont-regular";

`

const LetterContent = styled.div`
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
    width: 60px;
    position: absolute;
    top: -48px;
    right: 20px;
    `
const FlowerChiikawa = styled.img`
    width: 70px;
    position: absolute;
    top: -63px;
    left: 20px;
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

const ButtonsWrap = styled.div`
    align-self: flex-end;
    margin: 3px 3px 0 0;

`

const ModifyButton = styled.button`
    align-self: flex-end;
    font-family: "NPSfont-regular";
    width: 52px;
    height: 26px;
    background-color: ${colors.skyBlue};
    border: 1px solid ${colors.bordeGreyishBlue};
    color: #4D86A6;
    border-radius: 7px;
    line-height: normal;
    margin-right: 6px;
        
    &:hover {
            cursor: pointer;
        }
    `

const DeleteButton = styled.button`
    align-self: flex-end;
    font-family: "NPSfont-regular";
    width: 52px;
    height: 26px;
    background-color: #FFE8E8;
    border: 1px solid #DFADAD;
    color: #b96b6b;
    border-radius: 7px;
       
    &:hover {
            cursor: pointer;
        }
    `
const DateTime = styled(Date)`
    position: absolute;
    font-size: 14px;
    right: 30px;
    top: 38px;
`

function LetterDetailView() {
    const navigate = useNavigate();

    return (
        <>
            <BackButton onClick={() => { navigate('/') }}>돌아가기</BackButton>
            <StLetterSendingBox>
                <DateTime>2024/01/30 15:27</DateTime>
                <ProfileBox >
                    <ProfileImg src={profileImg} />
                    <span style={{ lineHeight: "normal" }}>갈비찜</span>
                </ProfileBox>
                <FlowerChiikawa src={flowerChiikawa}></FlowerChiikawa>
                <MomongaOnBox src={sleepyMomonga}></MomongaOnBox>
                <LetterContent>
                    <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Dear. 모몽가</p>
                    <p>야 만나서 반갑다 친구야</p>
                </LetterContent>
                <ButtonsWrap >
                    <ModifyButton>수정</ModifyButton>
                    <DeleteButton>삭제</DeleteButton>
                </ButtonsWrap>
            </StLetterSendingBox >
        </>
    )
}

export default LetterDetailView