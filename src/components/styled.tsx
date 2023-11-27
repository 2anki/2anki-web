import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  flex: 1 0 auto;
  min-height: 70vh;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const Main = styled.main`
  flex-direction: column;
  max-width: 720px;
  margin: 0 auto;
`;

export const HomeContainer = styled(Container)`
  padding: 0;
`;

export const PageContainer = styled.div`
  margin: 2rem auto;
`;
