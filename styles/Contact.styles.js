import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 3rem 0;
`;

export const ContactArea = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
