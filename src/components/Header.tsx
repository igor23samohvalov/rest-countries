import React from 'react';
import styled from 'styled-components';
import { BsFillMoonFill } from 'react-icons/bs';
import { Container } from './Container';
import { useLocalStorage } from '../hooks/useLocalStorage';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--elems-color);
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items; center;
  padding: 2rem 0;
`;

const ThemeSwitcher = styled.div`
  cursor: pointer;
  display: flex;
  width: 110px;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-normal);
`;

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--font-color);
  text-decoration: none;
  font-weight: var(--fw-bold);
  font-size: 20px;
`;

const Header:React.FC = () => {
  const [theme, toggleTheme] = useLocalStorage('light', 'theme');

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>
            Where in the world?
          </Title>
          <ThemeSwitcher onClick={toggleTheme}>
              <BsFillMoonFill /> {theme === 'light' ? 'Dark' : 'Light'} Mode
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;