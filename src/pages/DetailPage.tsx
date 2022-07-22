import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { routeCodes, routeSingle } from '../routing';
import CardFull from '../components/CardFull';
import NavigateBack from '../components/NavigateBack';
import { ICardFull, ISingleCardFetch } from '../types/types';

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
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const DetailPage:React.FC = () => {
  const { name } = useParams<string>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [card, setCard] = useState<ICardFull>(defaultCard);
  const [borders, setBorders] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    axios.get<ISingleCardFetch[]>(routeSingle(name))
      .then((res) => {
        if (res.status === 404) {
          throw new Error('Not Found');
        } 
        return res.data;
      })
      .then(([data]) => {
        setCard({
          capital: data.capital[0],
          currencies: Object.values(data.currencies)[0],
          img: data.flags.png,
          languages: Object.values(data.languages),
          nativeName: Object.values(data.name.nativeName)[0],
          name: data.name.common,
          population: data.population,
          subregion: data.subregion,
          tld: data.tld[0],
          region: data.region,
        });
        if (data.borders.length > 0) {
          axios.get(routeCodes(data.borders))
            .then((res) => res.data)
            .then((data) => data.map(({ name }:any) => name.common))
            .then((borders) => setBorders(borders))
        }
        setLoading(false);
      })
      .catch(() => navigate('/404'));
  }, [name]);

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
            borders={borders}
            loading={loading}
          />
        </Wrapper>
      </Container>
    </main>
  );
};

export default DetailPage;