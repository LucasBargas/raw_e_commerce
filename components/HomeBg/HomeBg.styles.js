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
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    background: rgba(0, 0, 0, .2);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

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
  position: relative;
  z-index: 3;

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

    @media (max-width: 320px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
    
    @media (max-width: 214px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const CallToMoreProductions = styled.div`
  padding-top: 1.5rem;

  @media (max-width: 214px) {
    padding-top: 1rem;
  }
  
  p {
    font-size: .9375rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 214px) {
      font-size: .75rem;
    }
  }
`;