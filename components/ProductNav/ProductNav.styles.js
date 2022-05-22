import styled from 'styled-components';

export const ProductNavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;

  @media (max-width: 1024px) {
    padding-bottom: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: .5rem;
    padding-bottom: 1rem;
  }
`;

export const ProductNavLeft = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryColor};

  span {
    display: inline-block;
    margin: 0 .2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};

    &.disable {
      pointer-events: none;
      opacity: .6;
    }
  }

  p {
    opacity: .6;
  }
`;

export const ProductNavRight = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: .2rem;
    color: ${({ theme }) => theme.colors.primaryColor};

    &:first-of-type::after {
      content: '|';
      margin: 0 .5rem;
    }

    &.disable {
      pointer-events: none;
      opacity: .6;
    }
  }
`;