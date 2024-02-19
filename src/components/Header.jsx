import React from 'react';
import styled from 'styled-components';
import headerImg from 'assets/image/header_background.jpeg';
import headerTitle from 'assets/image/header_title.png';
import 'shared/index.css';

const HeaderImage = styled.div`
  width: 710px;
  height: 260px;
  position: relative;
  background-image: url(${headerImg});
  background-size: cover;
  background-position: center;
`;

const TopOfImage = styled.div`
  width: 710px;
  height: 260px;
  position: absolute;
  background-color: #65788a;
  top: 0;
  opacity: 0.73;
`;

const Title = styled.img`
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  position: absolute;
`;
const LetterBoxSpan = styled.span`
  font-size: 35px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%);
  font-family: 'UhBeeSe_hyun';
  font-weight: bold;
  color: white;
  letter-spacing: 1.5px;
`;

function Header() {
  return (
    <div>
      <HeaderImage>
        <TopOfImage />
        <Title src={headerTitle} alt="Title-image"></Title>
        <LetterBoxSpan>LetterBox</LetterBoxSpan>
      </HeaderImage>
    </div>
  );
}

export default Header;
