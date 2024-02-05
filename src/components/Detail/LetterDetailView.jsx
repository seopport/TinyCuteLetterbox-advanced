import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import colors from 'shared/color'
import profileImg from 'assets/image/default_profile_bear.png';
import sleepyMomonga from "assets/image/sleepy_momonga.png"
import flowerChiikawa from "assets/image/chiikawa_w_flower.png"
import { useNavigate, useParams } from 'react-router-dom';
import { Date } from 'components/Main/LetterSummaryView';
import { changeToKoreanName } from 'shared/changeToKoreanName'
import { StLetterSendingBox } from 'components/Main/LetterSendingBox';
import { useDispatch, useSelector } from 'react-redux';
import { ModifyLetter, deleteLetter } from 'store/redux/modules/letters';

//#region
const StLetterDetailBox = styled(StLetterSendingBox)`
    box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.10);
    min-height: 240px;
    border: 1px solid ${colors.bordeGreyishBlue};
    margin: 40px;
    padding: 10px 20px 10px 20px;
    font-family: "sans-serif";
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
    transition: all 0.3s;
        
    &:hover {
            cursor: pointer;
            background-color: #eefeff;
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
    /* display: ${(props) => props.$isModifying ? "none" : "inline"}; */ //삼항연산자로 처리
    transition: all 0.3s;
        
    &:hover {
            cursor: pointer;
            background-color: #d8f7ff;

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
    transition: all 0.3s;
      
    &:hover {
            cursor: pointer;
            background-color: #ffdada;
        }
    `

const ModifyCancelButton = styled(ModifyButton)`
    background-color: #fcf0c9;
    color: #a57b06;
    border: 1px solid #d4aa35;
    /* display: ${(props) => props.$isModifying ? "inline" : "none"}; */

    &:hover {
        background-color: #fae5a1;
    }


`
const ModifyCompleteButton = styled(ModifyButton)`
    /* display: ${(props) => props.$isModifying ? "inline" : "none"}; */
`



const DateTime = styled(Date)`
    position: absolute;
    font-size: 14px;
    right: 30px;
    top: 38px;
`


const LetterContentTextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    background-color: transparent; 
    border: none;
    resize: none;
    outline: ${(props) => props.$isModifying ? "1px solid black" : "none"};
    line-height: 18px;
    border-radius: 5px;
    padding: ${(props) => props.$isModifying ? "3px" : "0px"};

`
//#endregion

function LetterDetailView() {
    const savedLetters = useSelector((state) => {
        return state.letters.savedLetters;
    });

    const dispatch = useDispatch();

    console.log(savedLetters);

    const navigate = useNavigate();
    const contentArea = useRef();

    const param = useParams();

    const handleDeleteButtonClick = (id) => {
        if (window.confirm("편지를 삭제하시겠습니까?")) {
            const newSavedLetters = savedLetters.filter((item) => {
                return item.id !== id
            });
            dispatch(deleteLetter(newSavedLetters))
            alert('💌 편지를 삭제했습니다. 홈으로 이동합니다.');
            navigate('/')
        } return;
    };

    const [modifiedContent, setmodifiedContent] = useState('');

    const handleContentChange = (e) => {
        setmodifiedContent(e.target.value);
    }

    const [isModifying, setIsModifying] = useState(false)

    const handleModifyButtonClick = () => {
        setIsModifying(true);
        setmodifiedContent(contentArea.current.textContent)
    }

    const findLetter = (id) => {
        return savedLetters.find((item) => {
            return item.id === id
        })
    }

    const handleModifyCompleteButtonClick = (id) => {
        const originalLetter = findLetter(id)

        if (originalLetter.content === modifiedContent) {
            alert('수정 사항이 없습니다.');
            contentArea.current.focus();
            return;
        } else alert('💌 수정이 완료되었습니다.');

        setIsModifying(false);
        originalLetter.content = modifiedContent;
        console.log(savedLetters)

    }

    const handleModifyCancelButtonClick = (id) => {
        const originalLetter = findLetter(id)
        // 변경 사항 있을시에만 컨펌메세지 출력
        if (originalLetter.content !== modifiedContent) {
            if (window.confirm("수정을 취소하시겠습니까?")) {
                setIsModifying(false);
                const originalLetter = savedLetters.find((item) => {
                    return item.id === id;
                });
                contentArea.current.value = originalLetter.content;
            } else contentArea.current.focus();
        } else {
            setIsModifying(false);
        }
    }

    return (
        <>
            <BackButton onClick={() => { navigate('/') }}>돌아가기</BackButton>

            {savedLetters.filter((item) => item.id === param.id)
                .map((item) => {
                    const koreanName = changeToKoreanName(item.writedTo)

                    return (
                        <StLetterDetailBox key={item.id}>
                            <FlowerChiikawa src={flowerChiikawa}></FlowerChiikawa>
                            <MomongaOnBox src={sleepyMomonga}></MomongaOnBox>
                            <DateTime>{item.createdAt}</DateTime>
                            <ProfileBox >
                                <ProfileImg src={profileImg} />
                                <span style={{ lineHeight: "normal", marginTop: "5px" }}>{item.nickname}</span>
                            </ProfileBox>
                            <LetterContent>
                                <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Dear. {koreanName}</p>
                                {/* 편지 내용 textarea ----------------------------------- */}
                                <LetterContentTextArea
                                    $isModifying={isModifying}
                                    defaultValue={item.content}
                                    onChange={handleContentChange}
                                    ref={contentArea} spellCheck={false} maxLength={200} readOnly={!isModifying}>
                                </LetterContentTextArea>
                            </LetterContent>

                            {isModifying
                                ?
                                <ButtonsWrap>
                                    <ModifyCompleteButton onClick={() => handleModifyCompleteButtonClick(item.id)} >완료</ModifyCompleteButton>
                                    <ModifyCancelButton onClick={() => handleModifyCancelButtonClick(item.id)} >취소</ModifyCancelButton>
                                    <DeleteButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</DeleteButton>
                                </ButtonsWrap>
                                :
                                <ButtonsWrap>
                                    <ModifyButton onClick={() => handleModifyButtonClick(item.id)}>수정</ModifyButton>
                                    <DeleteButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</DeleteButton>
                                </ButtonsWrap>
                            }
                        </StLetterDetailBox >
                    )
                })}

        </>
    )
}

export default LetterDetailView