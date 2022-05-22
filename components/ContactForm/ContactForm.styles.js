import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  width: 50%;
  padding: 80px 50px 50px 50px;
  background: ${({ theme }) => theme.colors.secondayColor};
  color: ${({ theme }) => theme.colors.primaryColor};

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 3rem 2rem 3rem 2rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;

export const ContactFormArea = styled.form`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  input, textarea {
    display: block;
    background: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: 'Avenir-Book';
    font-size: .875rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  input {
    padding-bottom: 8px;
  }

  input:nth-of-type(3), textarea {
    grid-column: 1 / 3;

    @media (max-width: 600px) {
      grid-column: 1 / 1;
    }
  }

  textarea {
    resize: none;
    height: 110px;
    overflow-y: auto;
  }
`;

export const ContactFormSend = styled.div`
  text-align: center;
  grid-column: 1 / 3;

  @media (max-width: 600px) {
    grid-column: 1 / 1;
  }

  button {
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    padding: 10px 50px;
    transition: .4s;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`; 
