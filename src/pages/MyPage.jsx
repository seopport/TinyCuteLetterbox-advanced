import {ModifyButton} from 'components/Detail/ModifyButton';
import {ModifyCancelButton} from 'components/Detail/ModifyCancelButton';
import {ModifyCompleteButton} from 'components/Detail/ModifyCompleteButton';
import {LoginContainer} from 'components/Login/LoginContainer';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {modifyNickname, modifyUserAvatar, modifyUserInfo} from 'store/redux/modules/authSlice';
import styled from 'styled-components';
import loginApi from 'apis/loginApi';
import letterApi from 'apis/letterApi';

const MyPage = () => {
  const userInfo = useSelector(state => state.authSlice.users);
  //토큰이 백엔드에 있어야 요청을 보낼지 안보낼지 결정
  //토큰 검정 실패시 로그아웃으로 바꿔버려
  const dispatch = useDispatch();

  const [isModifying, setIsModifying] = useState(false);
  const [modifiedNickname, setModifiedNickname] = useState('');
  const [imageSrc64, setImageSrc64] = useState();
  const [imageSrc, setImageSrc] = useState(userInfo.avatar);
  const nicknameInputValue = useRef();
  const fileInput = useRef();

  const handleModifyButtonClick = () => {
    console.log('닉네임 :', userInfo.nickname, '수정한닉 : ', modifiedNickname);
    setIsModifying(true);
    setModifiedNickname(userInfo.nickname);
  };

  const handleModifyCompleteButtonClick = async () => {
    //닉네임이 바뀌거나, 프로필 이미지가 바뀌면 수정완료
    // 닉네임과 프로필 이미지 모두 같으면 수정 안됨
    if (userInfo.nickname === modifiedNickname && userInfo.avatar === imageSrc) {
      alert('수정사항없다');
      console.log(userInfo.avatar, imageSrc);
      return;
    }
    // 수정하는 디스패치
    dispatch(modifyUserInfo({userId: userInfo.id, modifiedNickname, modifiedAvatar: imageSrc}));

    const {data} = await letterApi.get(`/letters?userId=${userInfo.id}`);
    const newLetters = data.map(item => {
      if (data.userId === userInfo.id) {
        return {...item, nickname: modifiedNickname, avatar: imageSrc};
      } else return item;
    });

    // 편지 수정하는거 안됨..
    // letterApi.patch(`/letters?userId=${newLetters.userId}`, newLetters);

    // 수정 서버 patch
    const updateUserInfo = {avatar: `${imageSrc}`, nickname: modifiedNickname};
    console.log('지금보내는 이미지주소', imageSrc);
    const res = await loginApi.patch('/profile', updateUserInfo);
    alert(res.data.message);
    console.log(res.data);

    setIsModifying(false);
  };

  console.log('업데이트한 userInfo', userInfo);

  const handleModifyCancelButtonClick = () => {
    nicknameInputValue.current.value = userInfo.nickname;
    setIsModifying(false);
  };

  const handleNicknameInputChange = e => {
    console.log(modifiedNickname);
    setModifiedNickname(e.target.value);
  };

  const handleInputChange = e => {
    encodeFileToBase64(e.target.files[0]);

    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImageSrc(imageUrl);
    console.log(imageUrl, '여기는 크리에이트 오브젝ㅌ 어쩌고 한거');
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
    <LoginContainer style={{padding: '30px 20px 15px 30px'}}>
      <StTitle>프로필 관리</StTitle>
      {console.log(userInfo)}
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
