import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1536px) {
    max-width: 1360px;
  }

  @media (max-width: 1440px) {
    max-width: 1265px;
  }

  @media (max-width: 1366px) {
    max-width: 1190px;
  }
  
  @media (max-width: 1280px) {
    max-width: 1105px;
  }

  @media (max-width: 1200px) {
    max-width: none;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 480px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 276px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default Container;