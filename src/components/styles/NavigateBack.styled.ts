import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

export const StyledDiv = styled.div`
  grid-column: span 2;
  display: flex;
  height: 150px;
  align-items: center;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--elems-color);
  font-size: var(--fs-md);
  color: var(--font-color);
  box-shadow: var(--shadow);
`;

export const StyledArrow = styled(BsArrowLeft)`
  margin-right: 10px;
  font-size: 18px;
`;