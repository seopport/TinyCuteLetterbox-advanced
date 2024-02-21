import styled from 'styled-components';
import colors from 'shared/color';

export const ModifyButton = styled.button`
  align-self: flex-end;
  font-family: 'NPSfont-regular';
  width: 52px;
  height: 26px;
  background-color: ${colors.skyBlue};
  border: 1px solid ${colors.bordeGreyishBlue};
  color: #4d86a6;
  border-radius: 7px;
  line-height: normal;
  margin-right: 6px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #d8f7ff;
  }
`;
