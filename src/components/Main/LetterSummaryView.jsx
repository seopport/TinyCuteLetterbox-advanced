import styled from 'styled-components';
import profileImg from 'assets/image/default_profile_bear2.png';
import colors from 'shared/color';
import "shared/index.css"
import { useNavigate } from 'react-router-dom';
import EmptyLetterBoxMessage from './EmptyLetterBoxMessage';
import { useContext } from 'react';
import { LetterContext } from 'context/LetterContext';


const LetterSummaryBox = styled.div`
    width: 68%;
    height: 80px;
    background-color: white;
    border-radius: 11px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid ${colors.bordeGreyishBlue};
    position: relative;
        
`

const ProfileImg = styled.img`
    width: 58px;
    margin-right: 5px;
`

const Line = styled.span`
    height: 1px; 
    width: 1px;
    background-color: #adadad;
    transform: rotate(90deg);
`

const Summary = styled.div`
    width: 390px;
    min-height: 30px;
    background-color: ${colors.skyBlue};
    border: 1px solid #8EB2C6;
    border-radius: 7px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
    padding: 5px;
    line-height: normal;
    margin-top: 7px;
`

const ViewDetails = styled.div`
    position: absolute;
    top: 12px;
    right: 15px;
    font-family: "NPSfont-regular";
    font-size: 13px;
    color: grey;

    &:hover {
        cursor: pointer;
    }
`
export const Date = styled.span`
    margin-left: 5px;
    width: fit-content;
    font-size: 12px;
    line-height: normal;
    color: grey;
`

function LetterSummaryView({ selectedCharacter, }) {
    const context = useContext(LetterContext);
    const savedLetters = context.savedLetters;

    const navigate = useNavigate();

    const filteredLetters = savedLetters
        .filter((item) => {
            return item.writedTo === selectedCharacter
        })

    return (
        <>
            {filteredLetters.length === 0 && <EmptyLetterBoxMessage />}
            {filteredLetters.map((item) => {
                return (

                    <LetterSummaryBox key={item.id}>
                        <ProfileImg src={profileImg}></ProfileImg>
                        <Line></Line>
                        <div>
                            <div style={{ display: "flex" }}>
                                <span style={{ fontSize: "15px" }}>{item.nickname}</span>
                                <Date>{item.createdAt.slice(0, 10)}</Date>
                            </div>
                            <Summary>{item.content}</Summary>

                        </div>
                        <ViewDetails onClick={() => navigate(`/details/${item.id}`)}>상세보기</ViewDetails>
                    </LetterSummaryBox>
                )
            })
            }
        </>
    )
}

export default LetterSummaryView