import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import colors from 'shared/color';
import profileImg from 'assets/image/default_profile_bear.png';
import sleepyMomonga from 'assets/image/sleepy_momonga.png';
import flowerChiikawa from 'assets/image/chiikawa_w_flower.png';
import {useNavigate, useParams} from 'react-router-dom';
import {Date} from 'components/Home/LetterSummaryView';
import {changeToKoreanName} from 'shared/changeToKoreanName';
import {StLetterSendingBox} from 'components/Home/LetterSendingBox';
import {useDispatch, useSelector} from 'react-redux';
import {deleteLetter, modifyLetter} from 'store/redux/modules/letters';
import {ModifyCompleteButton} from './ModifyCompleteButton';
import {ModifyCancelButton} from './ModifyCancelButton';
import {ModifyButton} from './ModifyButton';
import letterApi from 'apis/letterApi';

function LetterDetailView() {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contentArea = useRef();

  const [modifiedContent, setmodifiedContent] = useState('');
  const [isModifying, setIsModifying] = useState(false);

  const userInfo = useSelector(state => state.authSlice.users);
  const savedLetters = useSelector(state => state.letters.savedLetters);

  if (userInfo.accessToken === null) {
    alert('로그인 정보가 없습니다.');
    navigate('/login');
    return;
  }

  const handleDeleteButtonClick = id => {
    if (window.confirm('편지를 삭제하시겠습니까?')) {
      letterApi.delete(`/letters/${id}`);
      dispatch(deleteLetter(id));
      alert('💌 편지를 삭제했습니다. 홈으로 이동합니다.');
      navigate('/home');
    }
    return;
  };

  const findLetter = id => {
    return savedLetters.find(item => item.id === id);
  };

  const handleContentChange = e => {
    setmodifiedContent(e.target.value);
  };

  const handleModifyButtonClick = () => {
    setIsModifying(true);
    setmodifiedContent(contentArea.current.textContent);
  };

  // 수정 완료 버튼
  const handleModifyCompleteButtonClick = async id => {
    const originalLetter = findLetter(id);

    if (originalLetter.content === modifiedContent) {
      alert('수정 사항이 없습니다.');
      contentArea.current.focus();
      return;
    } else alert('💌 수정이 완료되었습니다.');

    try {
      await letterApi.patch(`/letters/${id}`, {content: modifiedContent});
      dispatch(modifyLetter({id, modifiedContent}));
    } catch (error) {
      console.log(error);
    }

    setIsModifying(false);
  };

  // 수정 취소 버튼
  const handleModifyCancelButtonClick = id => {
    const originalLetter = findLetter(id);
    // 변경 사항 있을시에만 컨펌메세지 출력
    if (originalLetter.content !== modifiedContent) {
      if (window.confirm('수정을 취소하시겠습니까?')) {
        setIsModifying(false);

        const originalLetter = savedLetters.find(item => {
          return item.id === id;
        });
        contentArea.current.value = originalLetter.content;
      } else contentArea.current.focus();
    } else {
      setIsModifying(false);
    }
  };

  return (
    <>
      <BackButton
        onClick={() => {
          navigate('/home');
        }}
      >
        돌아가기
      </BackButton>

      {savedLetters
        ?.filter(item => item.id === param.id)
        .map(item => {
          const koreanName = changeToKoreanName(item.writedTo);

          return (
            <StLetterDetailBox key={item.id}>
              <FlowerChiikawa src={flowerChiikawa}></FlowerChiikawa>
              <MomongaOnBox src={sleepyMomonga}></MomongaOnBox>
              <DateTime>{item.createdAt}</DateTime>
              <ProfileBox>
                <ProfileImg
                  src={item.avatar ? item.avatar : profileImg}
                  style={{borderRadius: '50%', border: '1px solid black'}}
                />
                <span style={{lineHeight: 'normal', marginTop: '5px'}}>{item.nickname}</span>
              </ProfileBox>
              <LetterContent>
                <p style={{marginBottom: '10px', fontWeight: 'bold'}}>Dear. {koreanName}</p>
                {/* 편지 내용 textarea ----------------------------------- */}
                <LetterContentTextArea
                  $isModifying={isModifying}
                  defaultValue={item.content}
                  onChange={handleContentChange}
                  ref={contentArea}
                  spellCheck={false}
                  maxLength={200}
                  readOnly={!isModifying}
                ></LetterContentTextArea>
              </LetterContent>
              {/* 자신이 작성한 글만 수정, 삭제 가능하도록 */}
              {item.userId === userInfo.id ? (
                <>
                  {isModifying ? (
                    <ButtonsWrap>
                      <ModifyCompleteButton onClick={() => handleModifyCompleteButtonClick(item.id)}>
                        완료
                      </ModifyCompleteButton>
                      <ModifyCancelButton onClick={() => handleModifyCancelButtonClick(item.id)}>
                        취소
                      </ModifyCancelButton>
                      <DeleteButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</DeleteButton>
                    </ButtonsWrap>
                  ) : (
                    <ButtonsWrap>
                      <ModifyButton onClick={() => handleModifyButtonClick(item.id)}>수정</ModifyButton>
                      <DeleteButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</DeleteButton>
                    </ButtonsWrap>
                  )}
                </>
              ) : (
                <></>
              )}
            </StLetterDetailBox>
          );
        })}
    </>
  );
}

//#region
const StLetterDetailBox = styled(StLetterSendingBox)`
  box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.1);
  min-height: 240px;
  border: 1px solid ${colors.bordeGreyishBlue};
  margin: 40px;
  padding: 10px 20px 10px 20px;
  font-family: 'sans-serif';
`;

const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  font-family: 'NPSfont-regular';
`;

const LetterContent = styled.div`
  width: 100%;
  margin: 7px;
  border-radius: 7px;
  padding: 15px;
  border: 1px solid ${colors.bordeGreyishBlue};
  background-color: ${colors.skyBlue};
  font-size: 14px;
`;

const MomongaOnBox = styled.img`
  width: 60px;
  position: absolute;
  top: -48px;
  right: 20px;
`;
const FlowerChiikawa = styled.img`
  width: 70px;
  position: absolute;
  top: -63px;
  left: 20px;
`;

const BackButton = styled.button`
  margin: 10px;
  align-self: flex-end;
  font-family: 'NPSfont-regular';
  padding: 10px;
  width: 88px;
  height: 35px;
  background-color: white;
  border: 1px solid ${colors.bordeGreyishBlue};
  color: #4d86a6;
  border-radius: 9px;
  line-height: 100%;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #eefeff;
  }
`;

const ButtonsWrap = styled.div`
  align-self: flex-end;
  margin: 3px 3px 0 0;
`;

const DeleteButton = styled.button`
  align-self: flex-end;
  font-family: 'NPSfont-regular';
  width: 52px;
  height: 26px;
  background-color: #ffe8e8;
  border: 1px solid #dfadad;
  color: #b96b6b;
  border-radius: 7px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #ffdada;
  }
`;

const DateTime = styled(Date)`
  position: absolute;
  font-size: 14px;
  right: 30px;
  top: 38px;
`;

const LetterContentTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  background-color: transparent;
  border: none;
  resize: none;
  outline: ${props => (props.$isModifying ? '1px solid black' : 'none')};
  line-height: 18px;
  border-radius: 5px;
  padding: ${props => (props.$isModifying ? '3px' : '0px')};
`;
//#endregion

export default LetterDetailView;
