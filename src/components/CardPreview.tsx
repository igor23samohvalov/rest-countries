import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
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

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px 5px 0 0;
  box-shadow: var(--shadow);
`;
const CardWrapper = styled.div`
  padding: 20px;

`
const CardTitle = styled.h3`
  margin-top: 10px;
  maring-bottom: 10px;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--fs-sm);

  & > * {
    padding-bottom: 5px;
  }
`;

interface CardPreviewProps {
  capital: string;
  flag: string;
  name: string;
  population: number;
  region: string;
}

const CardPreview:React.FC<CardPreviewProps> = ({ capital, flag, name, population, region }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(name)}>
      <CardImage src={flag} />
      <CardWrapper>
        <CardTitle>{name}</CardTitle>
        <CardInfo>
          <div><b>Population: </b><span>{population}</span></div>
          <div><b>Region: </b><span>{region}</span></div>
          <div><b>Capital: </b><span>{capital}</span></div>
        </CardInfo>
      </CardWrapper>
    </CardContainer>
  );
};

export default CardPreview;