import { BsFillMoonFill } from "react-icons/bs";
import Container from "./styles/Container";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  HeaderEl,
  Wrapper,
  ThemeSwitcher,
  Title,
} from "./styles/Header.styled";

function Header() {
  const [theme, toggleTheme] = useLocalStorage("light", "theme");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            <BsFillMoonFill /> {theme === "light" ? "Dark" : "Light"} Mode
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}

export default Header;
