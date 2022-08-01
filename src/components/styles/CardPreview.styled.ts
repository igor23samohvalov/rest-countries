import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--elems-color);
  height: 340px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: var(--shadow);

  &:hover {
    box-shadow: var(--intense-shadow);
    cursor: pointer;
  }
`;
export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px 5px 0 0;
  box-shadow: var(--shadow);
`;
export const CardWrapper = styled.div`
  padding: 20px;

`;
export const CardTitle = styled.h3`
  margin-top: 10px;
  maring-bottom: 10px;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--fs-sm);

  & > * {
    padding-bottom: 5px;
  };
`;