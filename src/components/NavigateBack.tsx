import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDiv, StyledButton, StyledArrow} from './styles/NavigateBack.styled';

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