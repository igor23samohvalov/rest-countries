import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const StyledDiv = styled.div`
  grid-column: span 2;
  display: flex;
  height: 150px;
  align-items: center;
`;

const StyledButton = styled.button`
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

const StyledArrow = styled(BsArrowLeft)`
  margin-right: 10px;
  font-size: 18px;
`;

const NavigateBack:React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledButton onClick={() => navigate(-1)}>
        <StyledArrow /> Back
      </StyledButton>
    </StyledDiv>
  )
}

export default NavigateBack