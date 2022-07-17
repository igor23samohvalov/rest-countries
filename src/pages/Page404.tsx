import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Title = styled.h3`
  margin-top: 40px;
`;

const Page404:React.FC = () => {
  return (
    <main>
      <Container>
        <Wrapper>
          <Title>
            404: Woops! Something went wrong...
          </Title>
        </Wrapper>
      </Container>
    </main>
  );
};

export default Page404;

