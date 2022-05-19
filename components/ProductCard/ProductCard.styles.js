import styled from 'styled-components';

export const FastVisualization = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 6;
  width: 100%;
  height: 2rem;
  overflow-y: hidden;
  text-align: center;
  background: transparent;
  cursor: pointer;
  
  p {
    transform: translate3d(0, 2rem, 0);
    transition: transform .3s;

    @media (max-width: 1024px) {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ProductCardContainer = styled.div`
  text-align: center;
  position: relative;
  
  &:hover {
    span:nth-of-type(2) {
      opacity: 1 !important;
    }

    ${FastVisualization} {
      p {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  figure {
    padding-bottom: .5rem;
    position: relative;
    z-index: 4;

    span:nth-of-type(2) {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
      opacity: 0 !important;

      @media (max-width: 1024px) {
        display: none !important;
      }
    }
  }
`;

export const ProductCardInfos = styled.div`
  padding-top: .25rem;

  h3, p {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  p {
    margin-top: .25rem;
  }
`
