import styled from 'styled-components';

export const ProductDatasContainer = styled.div`
  width: 50%;
  padding-left: 3rem;
  color: ${({ theme }) => theme.colors.primaryColor};

  @media (max-width: 820px) {
    width: 100%;
    padding-left: 0;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: normal;

    @media (max-width: 414px) {
      font-size: 1.25rem;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  span {
    margin-top: .5rem;
    display: inline-block;
    font-size: .875rem;

    @media (max-width: 414px) {
      font-size: .75rem;
    }
  }

  p {
    margin-top: 2rem;
    font-size: 1.25rem;

    @media (max-width: 414px) {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
`;

export const LinkToShow = styled.div`
  padding-top: 1rem;
  
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;