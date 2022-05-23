import styled from 'styled-components';

export const FooterNavArea = styled.div`
  display: flex;
  width: 50%;

  nav {
    &:first-of-type {
      margin-right: 4rem;
    }

    li {
      &:not(:last-of-type) {
        margin-bottom: .5rem;
      }

      a {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;