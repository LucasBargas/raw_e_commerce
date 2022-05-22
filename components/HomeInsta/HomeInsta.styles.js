import styled from 'styled-components';

export const HomeInstaContainer = styled.section`
  background: ${({ theme }) => theme.colors.secondayColor};
  padding: 60px 0;
`;

export const HomeInstaArea = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  figure {
    cursor: pointer;
    position: relative;

    &::after {
      content: '#projetosLucasBargas, #projetosLBS, #raw';
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: .875rem;
      background: rgba(0, 0, 0, .4);
      color: ${({ theme }) => theme.colors.lightColor};
      opacity: 0;
      transition: .4s;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    @media (max-width: 640px) {
      &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6), &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9), &:nth-of-type(10), &:nth-of-type(11) {
        display: none;
      }
    }

    span {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
    }

    &:nth-of-type(4) {
      grid-column: 4 / 6;
      grid-row: 1 / 3;

      @media (max-width: 640px) {
        grid-column: 1 / 1;
      }
    }

    &:nth-of-type(6) {
      grid-column: 1 / 3;
      grid-row:  2/ 4;

      @media (max-width: 640px) {
        grid-column: 1 / 1;
      }
    }
  }
`;