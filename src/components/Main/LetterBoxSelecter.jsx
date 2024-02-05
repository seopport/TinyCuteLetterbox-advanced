import styled from 'styled-components'
import colors from 'shared/color'
import "shared/index.css"
import { useContext } from 'react'
import { CharacterContext } from 'context/CharacterContext'
import { useDispatch, useSelector } from 'react-redux'
import { changeCharacter } from 'store/redux/modules/character'

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

export const SelectCharacter = styled.button`
        font-family: "UhBeeSe_hyun";
        padding: 10px;
        width: 88px;
        height: 35px;
        background-color: ${(props) => {
        return props.$character === props.$selectedCharacter ? colors.aquaBlue : "white"
    }};
        border: 1px solid ${colors.bordeGreyishBlue};
        border-radius: 7px;
        line-height: 100%;
        color: ${(props) => props.$character === props.$selectedCharacter ? "white" : colors.bordeGreyishBlue};
        transition: all 0.1s;

        &:hover {
            cursor: pointer;
        }
    `


function LetterBoxSelecter() {
    const selectedCharacter = useSelector((state) => {
        return state.character.selectedCharacter
    })
    const dispatch = useDispatch();

    const handleCharacterBox = (character) => {
        // setSelectedCharacter(character)
        dispatch(changeCharacter(character))
    }


    return (
        <SelectorBox>
            <SelectCharacter $character="chiikawa" onClick={() => handleCharacterBox("chiikawa")} $selectedCharacter={selectedCharacter}>치이카와</SelectCharacter>
            <SelectCharacter $character="hachiware" onClick={() => handleCharacterBox("hachiware")} $selectedCharacter={selectedCharacter}> 하치와레</SelectCharacter>
            <SelectCharacter $character="usagi" onClick={() => handleCharacterBox("usagi")} $selectedCharacter={selectedCharacter}>우사기</SelectCharacter>
            <SelectCharacter $character="momonga" onClick={() => handleCharacterBox("momonga")} $selectedCharacter={selectedCharacter}>모몽가</SelectCharacter>
        </SelectorBox>
    )
}

export default LetterBoxSelecter;