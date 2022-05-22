import styled from 'styled-components';

export const ProductListDescArea = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

export const ProductListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;

  &::after {
    content: '╋';
    font-weight: bold;
  }

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  svg {
    font-size: 1.75rem;
  }
`;

export const ProductList = styled.li`
  &:nth-of-type(1), &:nth-of-type(2) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }

  &.active {
    p {
      height: 80px;
      visibility: visible;
      transition: .2s;

      @media (max-width: 820px) {
        height: 70px;
      }

      @media (max-width: 480px) {
        height: 90px;
      }

      @media (max-width: 390px) {
        height: 105px;
      }
    }

    ${ProductListTitle} {
      &::after {
        content: '━';
        font-weight: bold;
      }
    }
  }

  p {
    height: 0;
    visibility: hidden;
    margin-top: 0;
    font-size: .875rem;
    overflow-y: hidden;
    transition: .2s;
  }
`;

