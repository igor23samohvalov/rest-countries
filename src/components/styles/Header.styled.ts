import styled from 'styled-components';

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--elems-color);
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items; center;
  padding: 2rem 0;
`;

export const ThemeSwitcher = styled.div`
  cursor: pointer;
  display: flex;
  width: 110px;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-normal);
`;

export const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--font-color);
  text-decoration: none;
  font-weight: var(--fw-bold);
  font-size: 20px;
`;