import styled from 'styled-components';
import colors from 'shared/color';
import 'shared/index.css';
import {useNavigate} from 'react-router-dom';
import EmptyLetterBoxMessage from './EmptyLetterBoxMessage';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import letterApi from 'apis/letterApi';
import {setLetter} from 'store/redux/modules/letters';

function LetterSummaryView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadLetters = async () => {
      try {
        // 편지 작성 날짜 내림차순
        const {data} = await letterApi.get('/letters?_sort=-createdAt');
        dispatch(setLetter(data));
      } catch (error) {
        alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        console.log(error);
      }
    };
    loadLetters();
  }, [dispatch]);

  const savedLetters = useSelector(state => state.letters.savedLetters);
  const selectedCharacter = useSelector(state => state.character.selectedCharacter);

  const filteredLetters = savedLetters?.filter(item => item.writedTo === selectedCharacter);

  return (
    <>
      {filteredLetters.length === 0 && <EmptyLetterBoxMessage />}
      {filteredLetters?.map(item => {
        return (
          <LetterSummaryBox key={item.id}>
            <ProfileImg src={item.avatar} />
            <Line></Line>
            <div>
              <div style={{display: 'flex'}}>
                <span style={{fontSize: '15px'}}>{item.nickname}</span>
                <Date>{item.createdAt.slice(0, 10)}</Date>
              </div>
              <Summary>{item.content}</Summary>
            </div>
            <ViewDetails onClick={() => navigate(`/details/${item.id}`)}>상세보기</ViewDetails>
          </LetterSummaryBox>
        );
      })}
    </>
  );
}

//#region
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
`;

const ProfileImg = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid black;
`;

const Line = styled.span`
  height: 1px;
  width: 1px;
  background-color: #adadad;
  transform: rotate(90deg);
`;

const Summary = styled.div`
  width: 390px;
  min-height: 30px;
  background-color: ${colors.skyBlue};
  border: 1px solid #8eb2c6;
  border-radius: 7px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
  padding: 5px;
  line-height: normal;
  margin-top: 7px;
`;

const ViewDetails = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
  font-family: 'NPSfont-regular';
  font-size: 13px;
  color: grey;

  &:hover {
    cursor: pointer;
  }
`;
export const Date = styled.span`
  margin-left: 5px;
  width: fit-content;
  font-size: 12px;
  line-height: normal;
  color: grey;
`;
//#endregion

export default LetterSummaryView;
