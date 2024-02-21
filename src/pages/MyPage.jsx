import {ModifyButton} from 'components/Detail/ModifyButton';
import {ModifyCancelButton} from 'components/Detail/ModifyCancelButton';
import {ModifyCompleteButton} from 'components/Detail/ModifyCompleteButton';
import {LoginContainer} from 'components/Login/LoginContainer';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {modifyUserInfo} from 'store/redux/modules/authSlice';
import styled from 'styled-components';
import loginApi from 'apis/loginApi';
import letterApi from 'apis/letterApi';
import {useNavigate} from 'react-router-dom';
import {BackButton} from 'components/Detail/BackButton';

const MyPage = () => {
  const userInfo = useSelector(state => state.authSlice.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModifying, setIsModifying] = useState(false);
  const [modifiedNickname, setModifiedNickname] = useState('');
  const [imageSrc64, setImageSrc64] = useState();
  const [imageSrc, setImageSrc] = useState(userInfo.avatar);
  const nicknameInputValue = useRef();
  const fileInput = useRef();

  const handleModifyButtonClick = () => {
    if (userInfo.accessToken === null) {
      alert('로그인 정보가 없습니다.');
      navigate('/login');
      return;
    }
    setIsModifying(true);
    setModifiedNickname(userInfo.nickname);
  };

  const handleModifyCompleteButtonClick = async () => {
    // 닉네임과 프로필 이미지 모두 원본데이터와 같으면 수정 안됨
    if (userInfo.nickname === modifiedNickname && userInfo.avatar === imageSrc) {
      alert('수정사항이 없습니다.');
      return;
    }

    const updateUserInfo = {avatar: imageSrc, nickname: modifiedNickname};

    try {
      // 리덕스 수정
      dispatch(modifyUserInfo({userId: userInfo.id, modifiedNickname, modifiedAvatar: imageSrc}));

      // json server 편지에 프로필 수정
      // 편지들 중에 userId가 같은 것만 받아오기
      const {data: targetLetters} = await letterApi.get(`/letters?userId=${userInfo.id}`);

      // targetLetters 배열의 아이디들 배열돌면서 patch
      for (const letters of targetLetters) {
        letterApi.patch(`/letters/${letters.id}`, updateUserInfo);
      }

      // 서버 프로필 수정
      const res = await loginApi.patch('/profile', updateUserInfo, {
        headers: {Authorization: `Bearer ${userInfo.accessToken}`},
      });

      alert(res.data.message);

      //로컬스토리지 수정
      const storageUserInfo = JSON.parse(localStorage.getItem('storageUserInfo'));
      const newUserInfo = {...storageUserInfo, nickname: modifiedNickname, avatar: imageSrc};
      localStorage.setItem('storageUserInfo', JSON.stringify(newUserInfo));
    } catch (error) {
      console.log('error', error);
      alert('알 수 없는 오류가 발생했습니다. 잠시 후 시도해주세요.');
    }

    setIsModifying(false);
  };

  const handleModifyCancelButtonClick = () => {
    nicknameInputValue.current.value = userInfo.nickname;
    setIsModifying(false);
  };

  const handleNicknameInputChange = e => {
    setModifiedNickname(e.target.value);
  };

  const handleInputChange = e => {
    encodeFileToBase64(e.target.files[0]);

    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImageSrc(imageUrl);
  };

  const handleEditButtonClick = () => {
    fileInput.current.click();
  };

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageSrc64(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>돌아가기</BackButton>
      <LoginContainer style={{padding: '30px 20px 15px 30px', marginTop: '15px'}}>
        <StTitle>프로필 관리</StTitle>
        <StProfileContainer>
          {/* 이미지 */}
          <div style={{position: 'relative'}}>
            <StProfileImage src={!imageSrc64 ? imageSrc : imageSrc64} />
            <input type="file" style={{display: 'none'}} onChange={handleInputChange} ref={fileInput}></input>
            {isModifying && <StEditButton onClick={handleEditButtonClick}>edit</StEditButton>}
          </div>
          {/* 아이디 닉네임 */}
          <div style={{margin: 'auto 0'}}>
            <StInfoWrap style={{marginBottom: '20px'}}>
              <StSpan>아이디</StSpan>
              <StInfo>{userInfo.id}</StInfo>
            </StInfoWrap>
            <StInfoWrap>
              <StSpan>닉네임</StSpan>
              <StInfoInput
                onChange={handleNicknameInputChange}
                ref={nicknameInputValue}
                defaultValue={userInfo.nickname}
                style={{backgroundColor: 'white'}}
                readOnly={!isModifying}
                maxLength={10}
              />
            </StInfoWrap>
          </div>
        </StProfileContainer>
        {/* 버튼 */}
        <div style={{alignSelf: 'flex-end', margin: '3px 3px 0 0'}}>
          {!isModifying ? (
            <ModifyButton onClick={handleModifyButtonClick}>수정</ModifyButton>
          ) : (
            <>
              <ModifyCompleteButton onClick={handleModifyCompleteButtonClick}>완료</ModifyCompleteButton>
              <ModifyCancelButton onClick={handleModifyCancelButtonClick}>취소</ModifyCancelButton>
            </>
          )}
        </div>
      </LoginContainer>
    </>
  );
};

export const StTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-right: auto;
`;

export const StProfileContainer = styled.div`
  width: 84%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StProfileImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 7px;
  border: 1px solid black;
`;

export const StInfoWrap = styled.div`
  width: 250px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StInfo = styled.div`
  height: 100%;
  width: 80%;
  background-color: lightgrey;
  border: 1px solid black;
  font-size: 14px;
  line-height: normal;
  padding-left: 5px;
  color: #6d6d6d;
`;

export const StInfoInput = styled.input`
  height: 25px;
  width: 80%;
  background-color: lightgrey;
  border: 1px solid black;
  font-size: 14px;
  line-height: 25px;
  padding-left: 5px;
  outline: none;
`;

export const StSpan = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const StEditButton = styled.button`
  position: absolute;
  width: 40px;
  height: 20px;
  top: 0;
  right: 0;
`;

export default MyPage;
