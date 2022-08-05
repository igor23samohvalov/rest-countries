import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 25px;
  } ;
`;
export const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 15px 30px 15px 60px;
  background-color: var(--elems-color);
  color: var(--font-color);
  box-shadow: var(--shadow);

  &::placeholder {
    color: var(--font-color);
    font-family: var(--family);
    font-weight: var(--fw-normal);
  }
`;
export const StyledIcon = styled(FaSearch)`
  position: absolute;
  top: 13px;
  left: 25px;
`;
