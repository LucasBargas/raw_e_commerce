import styled from 'styled-components';

export const FooterFormArea = styled.div`
  width: 50%;

  form {
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    input {
      background: transparent;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.lightColor};
      border-bottom: 4px solid tomato;
      padding: 11px 0 11px 1.25rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }

    button {
      display: block;
      border: 1px solid ${({ theme }) => theme.colors.lightColor};
      background: ${({ theme }) => theme.colors.lightColor};
      color: ${({ theme }) => theme.colors.primaryColor};
      padding: 11px 15px;
      font-size: .875rem;
      margin-left: 1.5rem;
      transition: .4s;

      @media (max-width: 1000px) {
        margin: 1rem 0 0 0;
      }

      @media (max-width: 480px) {
        padding: 8px 0;
      }

      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const FooterMedias = styled.ul`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    justify-content: center;

    li {
      margin: 0 .25rem;
    }
  }

  li {
    margin-left: 1rem;
    cursor: pointer;
  }
`
