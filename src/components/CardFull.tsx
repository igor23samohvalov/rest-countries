import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardFullProps {
  capital: string;
  currencies: any;
  img: string;
  languages: string[];
  name: string;
  nativeName: any;
  population: number;
  subregion: string;
  region: string;
  tld: string;
  borders: string[];
};

const StyledImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    width: fit-content;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const CardTitle = styled.h2`
  display: block;
`;
const CardContent = styled.div`
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
const CardAction = styled.div`
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
const StyledButton = styled.button`
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
const StyledB = styled.span`
  font-weight: var(--fw-normal);
`;

const CardFull:React.FC<CardFullProps> = (card) => {

  return (
    <>
      <StyledImg src={card.img} />
      <Card>
        <CardTitle>{card.name}</CardTitle>
        <CardContent>
          <div>
            <div><StyledB>Native Name: </StyledB><span>{card.nativeName.common}</span></div>
            <div><StyledB>Population: </StyledB><span>{card.population}</span></div>
            <div><StyledB>Region: </StyledB><span>{card.region}</span></div>
            <div><StyledB>Sub Region: </StyledB><span>{card.subregion}</span></div>
            <div><StyledB>Capital: </StyledB><span>{card.capital}</span></div>
          </div>
          <div>
            <div><StyledB>Top Level Domain: </StyledB><span>{card.tld}</span></div>
            <div><StyledB>Currencies: </StyledB><span>{card.currencies.name}</span></div>
            <div><StyledB>Languages: </StyledB><span>{card.languages.join(', ')}</span></div>
          </div>
        </CardContent>
        <CardAction>
          <StyledB style={{ marginRight: '10px' }}>Border Countries: </StyledB>
          {
            card.borders.length === 0
              ? 'There are no border countries around'
              : card.borders.map((b) => (
                <Link to={`/${b}`} key={b}>
                  <StyledButton >{b}</StyledButton>
                </Link>

              ))
          }
        </CardAction>
      </Card>
    </>
    
  )
}

export default CardFull