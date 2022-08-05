import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledImg = styled(motion.img)`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    width: fit-content;
  }
`;
export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const CardTitle = styled.h2`
  display: block;
`;
export const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: var(--fs-sm);

  & > div > * {
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    & > div {
      margin-bottom: 25px;
    }
  }
`;
export const CardAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    span {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
export const StyledButton = styled.button`
  padding: 8px 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--elems-color);
  font-size: var(--fs-sm);
  color: var(--font-color);
  box-shadow: var(--shadow);
`;
export const StyledB = styled.span`
  font-weight: var(--fw-normal);
`;
