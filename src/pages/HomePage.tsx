import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import CardPreview from "../components/CardPreview";
import Container from "../components/styles/Container";
import Filters from "../components/Filters";
import { routeAll } from "../routing";
import { ICardPreview } from "../types/types";
import Loader from "../components/styles/Loader";
import Pagination from "../components/Pagination";

const CARDS_PER_PAGE = 12;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

function HomePage() {
  const [allCards, setAllCards] = useState<ICardPreview[]>([]);
  const [cards, setCards] = useState<ICardPreview[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const navigate = useNavigate();

  const filterCards = (country: string, region: string): void => {
    const filteredCards = allCards.filter((c) => {
      return (
        c.name.official.toLowerCase().includes(country.toLowerCase()) &&
        c.region.toLowerCase().includes(region.toLowerCase())
      );
    });
    setPage(1);
    setCards(filteredCards);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get<ICardPreview[]>(routeAll())
      .then((res) => res.data)
      .then((data) => {
        setCards(data);
        setAllCards(data);
        setLoading(false);
      })
      .catch(() => navigate("/404"));
  }, []);

  const startPage = (page - 1) * CARDS_PER_PAGE;
  const endPage = startPage + CARDS_PER_PAGE;
  return (
    <main>
      <Container>
        <Filters filterCards={filterCards} />
        {loading ? (
          <Loader />
        ) : (
          <CardsContainer>
            {cards.slice(startPage, endPage).map((c) => (
              <CardPreview
                key={c.name.common}
                capital={c.capital[0]}
                flag={c.flags.png}
                name={c.name.common}
                population={c.population}
                region={c.region}
              />
            ))}
          </CardsContainer>
        )}
        <Pagination
          length={Math.ceil(cards.length / 12)}
          page={page}
          setPage={setPage}
        />
      </Container>
    </main>
  );
}

export default HomePage;
