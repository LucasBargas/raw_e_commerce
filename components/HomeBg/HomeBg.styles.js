import styled from 'styled-components';
import bg from '../../public/images/bg/initial_bg.png';

export const HomeBgArea = styled.section`
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
    min-height: none;
    background-position: center;
  }

  @media (max-width: 480px) {
    background-position: 40% 10%;
    height: calc(100vh - 71.7px);
  }

  @media (max-width: 370px) {
    height: calc(100vh - 68px);
  }
`;