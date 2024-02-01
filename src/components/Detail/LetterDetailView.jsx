import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import colors from 'shared/color'
import profileImg from 'assets/image/default_profile_bear.png';
import sleepyMomonga from "assets/image/sleepy_momonga.png"
import flowerChiikawa from "assets/image/chiikawa_w_flower.png"
import { useNavigate, useParams } from 'react-router-dom';
import { Date } from 'components/Main/LetterSummaryView';
import { changeToKoreanName } from 'shared/changeToKoreanName'


//#region
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
    margin-right: 10px;
`

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
        font-family: "NPSfont-regular";

`

const LetterContent = styled.div`
    width: 100%;
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

const ModifyCancelButton = styled(ModifyButton)`
    background-color: #fcf0c9;
    color: #a57b06;
    border: 1px solid #d4aa35;
    display: none;

`
const ModifyCompleteButton = styled(ModifyButton)`
    display: none;
`



const DateTime = styled(Date)`
    position: absolute;
    font-size: 14px;
    right: 30px;
    top: 38px;
`


const LetterContentTextArea = styled.textarea`
    width: 100%;
    height: 100px;
    background-color: transparent;
    border: none;
    resize: none;
    outline: none;
    line-height: 18px;
    border-radius: 5px;
`
//#endregion

function LetterDetailView({ savedLetters, setSavedLetters }) {
    const navigate = useNavigate();
    const contentArea = useRef();
    const modifyButton = useRef();
    const modifyCompleteButton = useRef();
    const modifyCancelButton = useRef();

    const [content, setContent] = useState('');

    const param = useParams();


    const handleDeleteButtonClick = (id) => {
        if (window.confirm("편지를 삭제하시겠습니까?")) {
            setSavedLetters((prev) => {
                const newSavedLetters = prev.filter((item) => {
                    return item.id !== id
                });
                return newSavedLetters;
            })
            alert('💌 편지를 삭제했습니다. 홈으로 이동합니다.');
            navigate('/')
        } return;
    };


    const handleContentChange = (e) => {
        setContent(e.target.value);
        console.log(content)
    }

    const [isModifying, setIsModifying] = useState(false)

    const renderModifyButton = (isModifying) => {
        if (isModifying) {
            modifyButton.current.style.display = 'none';
            modifyCompleteButton.current.style.display = 'inline';
            modifyCancelButton.current.style.display = 'inline';
        } else {
            modifyButton.current.style.display = 'inline';
            modifyCompleteButton.current.style.display = 'none';
            modifyCancelButton.current.style.display = 'none';
        }
    }

    const renderTextAreaStyle = (isModifying) => {
        if (isModifying) {
            contentArea.current.style.outline = '1px solid black';
            contentArea.current.style.padding = '3px';
        } else {
            contentArea.current.style.outline = 'none';
            contentArea.current.style.padding = '0px';
        }
    }

    const handleModifyButtonClick = (id) => {
        //true로 바꾸면 props로 스타일 결정?
        setIsModifying(true);
        renderModifyButton(true);
        renderTextAreaStyle(true)
        const originalContent = savedLetters.find((item) => {
            return item.id === id
        })
        const newContent = content;

        console.log("수정 전 :", originalContent.content, "수정 후 : ", newContent)

        //아이디가 같은 편지의 textContent
    }

    const handleModifyCompleteButtonClick = (id) => {
        setIsModifying(false);
        renderModifyButton(false);
        renderTextAreaStyle(false)

    }

    const handleModifyCancelButtonClick = () => {
        setIsModifying(false);
        renderModifyButton(false);
        renderTextAreaStyle(false)

    }

    return (
        <>
            <BackButton onClick={() => { navigate('/') }}>돌아가기</BackButton>
            {savedLetters.filter((item) => item.id === param.id)
                .map((item) => {
                    const koreanName = changeToKoreanName(item.writedTo)
                    return (
                        <StLetterSendingBox key={item.id}>
                            <DateTime>{item.createdAt}</DateTime>
                            <ProfileBox >
                                <ProfileImg src={profileImg} />
                                <span style={{ lineHeight: "normal", marginTop: "5px" }}>{item.nickname}</span>
                            </ProfileBox>
                            <FlowerChiikawa src={flowerChiikawa}></FlowerChiikawa>
                            <MomongaOnBox src={sleepyMomonga}></MomongaOnBox>
                            <LetterContent>
                                <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Dear. {koreanName}</p>
                                <LetterContentTextArea
                                    defaultValue={item.content}
                                    onChange={handleContentChange}
                                    ref={contentArea} spellCheck={false} maxLength={100} readOnly={!isModifying}>

                                </LetterContentTextArea>
                            </LetterContent>
                            <ButtonsWrap >
                                <ModifyButton
                                    ref={modifyButton}
                                    onClick={() => handleModifyButtonClick(item.id)}>
                                    수정
                                </ModifyButton>
                                <ModifyCompleteButton ref={modifyCompleteButton} onClick={() => handleModifyCompleteButtonClick(item.id)} >완료</ModifyCompleteButton>
                                <ModifyCancelButton ref={modifyCancelButton} onClick={handleModifyCancelButtonClick} >취소</ModifyCancelButton>
                                <DeleteButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</DeleteButton>
                            </ButtonsWrap>
                        </StLetterSendingBox >
                    )
                })}

        </>
    )
}

export default LetterDetailView