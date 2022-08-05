import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  CardWrapper,
  CardTitle,
  CardInfo,
} from "./styles/CardPreview.styled";

interface CardPreviewProps {
  capital: string;
  flag: string;
  name: string;
  population: number;
  region: string;
}

function CardPreview({
  capital,
  flag,
  name,
  population,
  region,
}: CardPreviewProps) {
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={() => navigate(name)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: 1.009,
        transition: { duration: 0.3 },
      }}
    >
      <CardImage src={flag} />
      <CardWrapper>
        <CardTitle>{name}</CardTitle>
        <CardInfo>
          <div>
            <b>Population: </b>
            <span>{population}</span>
          </div>
          <div>
            <b>Region: </b>
            <span>{region}</span>
          </div>
          <div>
            <b>Capital: </b>
            <span>{capital}</span>
          </div>
        </CardInfo>
      </CardWrapper>
    </CardContainer>
  );
}

export default CardPreview;
