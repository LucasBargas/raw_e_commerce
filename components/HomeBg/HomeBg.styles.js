import styled from 'styled-components';
import bg from '../../public/images/bg/initial_bg.png';

export const HomeBgContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${bg.src});
  min-height: 580px;

  @media (max-width: 1536px) {
    height: 80vh;
  }

  @media (max-width: 1440px) {
    height: 75vh;
  }

  @media (max-width: 1366px) {
    height: calc(100vh - 71.7px);
    background-position: 100% 30%;
  }

  @media (max-width: 1024px) {
    height: 60vh;
    min-height: 0;
    background-position: center;
  }

  @media (max-width: 480px) {
    background-position: 40% 10%;
    height: calc(100vh - 71.7px);
  }

  @media (max-width: 370px) {
    height: calc(100vh - 68px);
  }

  @media (max-width: 276px) {
    height: calc(100vh - 55.09px);
  }
`;

export const HomeBgArea = styled.div`
  max-width: 500px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.lightColor};
  text-align: center;

  @media (max-width: 414px) {
    max-width: none;
  }

  h1 {
    font-family: 'Anton-Regular';
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 5.5rem;
    font-size: 4.875rem;

    @media (max-width: 640px) {
      font-size: 4rem;
      line-height: 5rem;
    }

    @media (max-width: 414px) {
      font-size: 3.5rem;
      line-height: 4rem;
    }

    @media (max-width: 276px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
    
    @media (max-width: 214px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;