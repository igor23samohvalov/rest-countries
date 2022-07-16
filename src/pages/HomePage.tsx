import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardPreview from '../components/CardPreview';
import { Container } from '../components/Container';
import Filters from '../components/Filters';
import { route } from '../routing';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 50px;
`

const HomePage:React.FC = () => {
  const [allCards, setAllCards] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  
  const filterCards = (country: string, region: string):void => {
    const filteredCards = allCards.filter((c) => {
      return c.name.official.toLowerCase().includes(country.toLowerCase())
        && c.region.toLowerCase().includes(region.toLowerCase());
    })
    setCards(filteredCards);
  }

  useEffect(() => {
    axios.get(route())
      .then((res) => res.data)
      .then((data) => {
        setCards(data)
        setAllCards(data)
      })
  }, []);

  return (
    <main>
      <Container>
        <Filters filterCards={filterCards} />
        <CardsContainer>
          {cards.map((c) => (
            <CardPreview
              key={c.name.official}
              capital={c.capital[0]}
              flag={c.flags.png}
              name={c.name.official}
              population={c.population}
              region={c.region}
            />
          ))}
        </CardsContainer>
      </Container>
    </main>
  );
};

export default HomePage;