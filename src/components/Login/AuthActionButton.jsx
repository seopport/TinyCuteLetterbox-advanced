import styled from 'styled-components';
import colors from 'shared/color';
import {SelectCharacter} from 'components/Home/LetterBoxSelecter';

export const AuthActionButton = styled(SelectCharacter)`
  width: 100%;
  height: 45px;
  font-size: 16px;
  margin-top: 10px;
  color: ${props => (props.$isValid ? 'white' : colors.bordeGreyishBlue)};
  background-color: ${props => (props.$isValid ? colors.aquaBlue : 'white')};
  transition: all 0.3s;

  &:hover {
    cursor: ${props => (props.$isValid ? 'pointer' : 'not-allowed')};
  }
`;
