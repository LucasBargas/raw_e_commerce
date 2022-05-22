import styled from 'styled-components';

export const ContactInfosContainer = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.primaryColor};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ContactsInfosWeb = styled.div`
  text-align: center;
  padding: 80px 0 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
  max-width: 380px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 2rem 0 40px 0;
  }

  h3 {
    letter-spacing: 1px;
    margin-bottom: 1.875rem;
  }

  p {
    margin-bottom: 3px;
  }
`;

export const ContactInfosPartners = styled.div`
  padding: 45px 15px 80px 15px;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 45px 15px 3rem 15px;
  }

  h3 {
    letter-spacing: 1px;
    margin-bottom: 1.875rem;
  }

  p {
    font-size: .875rem;
    margin-bottom: .5rem;
  }
`;
