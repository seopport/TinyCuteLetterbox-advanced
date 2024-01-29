import React from 'react'
import styled from 'styled-components'
import colors from 'shared/color'
import "shared/index.css"



function LetterBoxSelecter() {
    const SelectorBox = styled.div`
    width: 57%;
    height: 47px;
    background-color: white;
    border: 1px solid ${colors.bordeGreyishBlue};
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 7px;
    justify-content: space-between;
    margin-bottom: 20px;
    `

    const SelectCharacter = styled.button`
        font-family: "UhBeeSe_hyun";
        padding: 10px;
        width: 88px;
        height: 35px;
        background-color: white;
        border: 1px solid ${colors.bordeGreyishBlue};
        border-radius: 7px;
        line-height: 100%;
        color: ${colors.bordeGreyishBlue};
        &:hover {
            cursor: pointer;
        }

        &:active { /* 추후 onClick으로 구현 필요 */
            background-color: ${colors.aquaBlue};
            color: white;
        }
    `

    return (
        <>
            <SelectorBox>
                <SelectCharacter>치이카와</SelectCharacter>
                <SelectCharacter>하치와레</SelectCharacter>
                <SelectCharacter>우사기</SelectCharacter>
                <SelectCharacter>모몽가</SelectCharacter>
            </SelectorBox>
        </>
    )
}

export default LetterBoxSelecter