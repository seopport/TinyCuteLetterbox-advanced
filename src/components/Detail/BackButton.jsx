import colors from 'shared/color';
import styled from 'styled-components';

export const BackButton = styled.button`
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
