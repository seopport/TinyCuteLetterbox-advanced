import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import color from 'shared/color'
import "shared/index.css"
import meltingChiikawa from "assets/melting_chiikawa.png"

const StLetterSendingBox = styled.div`
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
    `

const WriterInput = styled.input`
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        width: 100px;
        padding: 2px;
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

export const ChiikawaOnBox = styled.img`
        width: 73px;
        position: absolute;
        top: -37px;
        right: 20px;
    `

function LetterSendingBox() {

    const letterContentValue = useRef();
    const writerValue = useRef();

    //옵션으로 선택한 캐릭터
    const [selectedCharacter, setSelectedCharacter] = useState("chiikawa");

    const handleLetterContent = () => {

    };

    const handleSendButtonClick = () => {
        const letterContent = letterContentValue.current.value; //편지 작성 내용
        const sendTo = selectedCharacter; //보낼 캐릭터
        const writer = writerValue.current.value; //작성자
        console.log(letterContent)
        console.log(sendTo)
        console.log(writer)

    }

    const handleSelector = (e) => {
        setSelectedCharacter(e.currentTarget.value)
    }

    return (
        <>
            {/* form태그 써보기 */}
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
                <WriteLetterBox maxLength={100} placeholder='최대 100자까지 입력할 수 있습니다.' spellCheck={false} ref={letterContentValue} onChange={handleLetterContent} />
                <div style={{ alignSelf: "flex-end" }}>
                    <span style={{ fontSize: "14px" }} >작성자</span>
                    <WriterInput maxLength={10} ref={writerValue} />
                </div>
                <SendLetterButton onClick={handleSendButtonClick}>보내기</SendLetterButton>
            </StLetterSendingBox>

        </>
    )
}

export default LetterSendingBox