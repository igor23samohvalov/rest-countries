import { Link } from "react-router-dom";
import { ICardFull } from "../types/types";
import Loader from "./styles/Loader";
import {
  StyledImg,
  Card,
  CardTitle,
  CardContent,
  CardAction,
  StyledButton,
  StyledB,
} from "./styles/CardFull.styles";

function CardFull(card: ICardFull) {
  if (card.loading) return <Loader />;

  return (
    <>
      <StyledImg
        src={card.img}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      <Card
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <CardTitle>{card.name}</CardTitle>
        <CardContent>
          <div>
            <div>
              <StyledB>Native Name: </StyledB>
              <span>{card.nativeName.common}</span>
            </div>
            <div>
              <StyledB>Population: </StyledB>
              <span>{card.population}</span>
            </div>
            <div>
              <StyledB>Region: </StyledB>
              <span>{card.region}</span>
            </div>
            <div>
              <StyledB>Sub Region: </StyledB>
              <span>{card.subregion}</span>
            </div>
            <div>
              <StyledB>Capital: </StyledB>
              <span>{card.capital}</span>
            </div>
          </div>
          <div>
            <div>
              <StyledB>Top Level Domain: </StyledB>
              <span>{card.tld}</span>
            </div>
            <div>
              <StyledB>Currencies: </StyledB>
              <span>{card.currencies.name}</span>
            </div>
            <div>
              <StyledB>Languages: </StyledB>
              <span>{card.languages.join(", ")}</span>
            </div>
          </div>
        </CardContent>
        <CardAction>
          <StyledB style={{ marginRight: "10px" }}>Border Countries: </StyledB>
          {card?.borders?.length === 0
            ? "There are no border countries around"
            : card?.borders?.map((b) => (
                <Link to={`/${b}`} key={b}>
                  <StyledButton>{b}</StyledButton>
                </Link>
              ))}
        </CardAction>
      </Card>
    </>
  );
}

export default CardFull;
