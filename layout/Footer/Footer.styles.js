import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.colors.lightColor};
`;

export const FooterTop = styled.section`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: 3.5rem 0;
`;

export const FooterTopArea = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FooterBottom = styled.section`
  background: ${({ theme }) => theme.colors.grayColor};
  padding: 1rem 0;
  text-align: center;

  p {
    margin-bottom: .25rem;
    line-height: 1.5rem;
  }

  p, a {
    font-size: .875rem;
  }

  a {
    color: ${({ theme }) => theme.colors.titleGray};

    &:hover {
      text-decoration: underline;
    }
  }
`;
