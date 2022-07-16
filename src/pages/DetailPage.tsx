import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { route } from '../routing';
import CardFull from '../components/CardFull';
import NavigateBack from '../components/NavigateBack';

type CardTypes = {
  capital: string;
  currencies: any;
  img: string;
  languages: string[];
  name: string;
  nativeName: any;
  population: number;
  subregion: string;
  tld: string; 
  region: string;
  borders: string[];
}

const defaultCard = {
  capital: '',
  currencies: '',
  img: '',
  languages: [],
  name: '',
  nativeName: '',
  population: Infinity,
  subregion: '',
  tld: '',
  region: '',
  borders: [],
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
`;

const DetailPage:React.FC = () => {
  const { name } = useParams();
  const [card, setCard] = useState<CardTypes>(defaultCard);

  useEffect(() => {
    axios.get(route(name))
      .then((res) => res.data)
      .then(([data]) => {
        setCard({
          capital: data.capital[0],
          currencies: Object.values(data.currencies)[0],
          img: data.flags.png,
          languages: Object.values(data.languages),
          nativeName: Object.values(data.name.nativeName)[0],
          name: data.name.official,
          population: data.population,
          subregion: data.subregion,
          tld: data.tld[0],
          region: data.region,
          borders: data.borders,
        })});
  }, []);

  return (
    <main>
      <Container>
        <Wrapper>
          <NavigateBack />
          <CardFull
            capital={card.capital}
            currencies={card.currencies}
            img={card.img}
            languages={card.languages}
            nativeName={card.nativeName}
            name={card.name}
            population={card.population}
            subregion={card.subregion}
            tld={card.tld}
            region={card.region}
            borders={card.borders}
          />
        </Wrapper>
      </Container>
    </main>
  );
};

export default DetailPage;