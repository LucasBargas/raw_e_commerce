import styled from 'styled-components';

export const ProductFormContainer = styled.form`
  padding-top: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryColor};

  @media (max-width: 414px) {
    padding-top: 1rem;
  }

  label {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: .25rem;

    &:last-of-type {
      margin-top: 1rem;
    }
  }

  input, select {
    background: ${({ theme }) => theme.colors.lightColor} !important;
    color: ${({ theme }) => theme.colors.primaryColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: .5rem 4px;
  }

  input {
    max-width: 76px;
    padding: .75rem 0 .75rem .5rem;

    @media (max-width: 414px) {
      padding: .5rem 0 .5rem .5rem;
    }
  }

  button {
    margin-top: 1.5rem;
    display: block;
    width: 100%;
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-size: .875rem;
    padding: .75rem 0;
    transition: .6s;

    &:hover {
      opacity: .9;
    }
  }
`;