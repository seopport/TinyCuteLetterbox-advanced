import styled from 'styled-components';
import {ModifyButton} from './ModifyButton';

export const ModifyCancelButton = styled(ModifyButton)`
  background-color: #fcf0c9;
  color: #a57b06;
  border: 1px solid #d4aa35;
  /* display: ${props => (props.$isModifying ? 'inline' : 'none')}; */

  &:hover {
    background-color: #fae5a1;
  }
`;
