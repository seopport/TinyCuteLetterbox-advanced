import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import color from 'shared/color'
import "shared/index.css"
import meltingChiikawa from "assets/image/melting_chiikawa.png"
import profileImge from "assets/image/default_profile_bear.png"
import uuid from 'react-uuid'
import { changeToKoreanName } from 'shared/changeToKoreanName'
import { LetterContext } from 'context/LetterContext'
import { CharacterContext } from 'context/CharacterContext'
import { useDispatch, useSelector } from 'react-redux'
import { SetSavedLetters } from 'store/redux/modules/letters'
import { UseDispatch } from 'react-redux'
import { sendLetter } from 'store/redux/modules/letters'

//#region
export const StLetterSendingBox = styled.div`
        background-color: white;
        width: 475px;
        min-height: 215px;
        border-radius: 11px;
        border: 1px solid ${color.bordeGreyishBlue};
        padding: 25px 40px 10px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "NPSfont-regular";
        position: relative;
        margin-bottom: 20px;
    `

const SendLetterText = styled.span`
        font-size: 20px;
        color: #064B73;
        margin: 20px;
        font-family: "UhBeeSe_hyun";
    `

const SelectBox = styled.select`
        height: 25px;
        width: 80px;
        margin-left: 50px;
    `

const WriteLetterBox = styled.textarea`
        width: 100%;
        height: 100px;
        margin: 7px;
        resize: none;
        border-radius: 7px;
        padding: 10px;
        border: 1px solid rgba(147, 147, 147, 1);
        font-size: 14px;
        &::placeholder {
            font-size: 12px;
        }
    `

const WriterInput = styled.input`
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        width: 80px;
        padding: 2px;
        margin-left: 3px;
    `

const SendLetterButton = styled.button`
        margin-top: 10px;
        width: 70px;
        height: 30px;
        background-color: ${color.aquaBlue};
        border: 1px solid #07689E;
        border-radius: 5px;
        line-height: 100%;
        color: white;
        font-family: "UhBeeSe_hyun";
        &:hover {
            cursor: pointer;
        }

        &:active {
            background-color: #187aaf
        }
    `
//#endregion


export const ChiikawaOnBox = styled.img`
        width: 73px;
        position: absolute;
        top: -37px;
        right: 20px;
    `

function LetterSendingBox() {
    const data = useSelector((state) => {
        return state.letters.savedLetters;
    });

    const dispatch = useDispatch();

    console.log(data);

    const letterContextData = useContext(LetterContext)
    console.log(letterContextData.savedLetters)
    const savedLetters = letterContextData.savedLetters;
    const setSavedLetters = letterContextData.setSavedLetters;

    const characterContextData = useContext(CharacterContext);
    const selectedCharacter = characterContextData.selectedCharacter;
    const setSelectedCharacter = characterContextData.setSelectedCharacter;

    const letterInput = useRef();
    const writerInput = useRef();

    //옵션으로 선택한 캐릭터
    const handleSendButtonClick = () => {
        const setDate = (date) => {
            return date < 10 ? "0" + date : date.toString();
        }

        const year = new Date().getFullYear();
        const month = setDate(new Date().getMonth() + 1);
        const day = setDate(new Date().getDate());
        const hour = setDate(new Date().getHours());
        const minute = setDate(new Date().getMinutes());

        const createdAt = [[year, month, day].join('-') + " " + [hour, minute].join(':')]

        const letterContent = letterInput.current.value;
        const sendTo = selectedCharacter; //보낼 캐릭터
        const writer = writerInput.current.value; //작성자

        if (letterContent.trim() === '') {
            alert('편지 내용을 입력해주세요.');
            letterInput.current.focus();
            return;
        }

        if (writer.trim() === '') {
            alert('작성자를 입력해주세요.')
            writerInput.current.focus();
            return;
        }
        const newLetter = {
            createdAt: createdAt[0],
            nickname: writer,
            avatar: profileImge,
            content: letterContent,
            writedTo: sendTo,
            id: uuid()

        }
        // setSavedLetters([...savedLetters, newLetter])
        dispatch(sendLetter(newLetter))
        console.log(data)

        const koreanName = changeToKoreanName(sendTo)
        alert(`💌 ${koreanName}에게 편지를 보냈어요.`)

        //폼 초기화
        letterInput.current.value = ''
        writerInput.current.value = ''
    }


    //드롭다운 select한 캐릭터로 set
    const handleSelector = (e) => {
        setSelectedCharacter(e.currentTarget.value)
    }


    return (
        <>
            <SendLetterText>편지 보내기</SendLetterText>
            <StLetterSendingBox>
                <ChiikawaOnBox src={meltingChiikawa}></ChiikawaOnBox>
                <div style={{ alignSelf: "flex-start", position: "relative" }}>
                    <span style={{ position: "absolute", bottom: "3px" }}>Dear.</span> <SelectBox onChange={handleSelector}>
                        <option value={"chiikawa"}>치이카와</option>
                        <option value={"hachiware"}>하치와레</option>
                        <option value={"usagi"}>우사기</option>
                        <option value={"momonga"}>모몽가</option>
                    </SelectBox>
                </div>
                <WriteLetterBox
                    maxLength={200} placeholder='최대 200자까지 입력할 수 있습니다.' spellCheck={false} ref={letterInput} />
                <div style={{ alignSelf: "flex-end" }}>
                    <span style={{ fontSize: "14px" }} >작성자</span>
                    <WriterInput maxLength={10} ref={writerInput} />
                </div>
                <SendLetterButton type="submit" onClick={handleSendButtonClick}>보내기</SendLetterButton>
            </StLetterSendingBox>

        </>
    )
}

export default LetterSendingBox