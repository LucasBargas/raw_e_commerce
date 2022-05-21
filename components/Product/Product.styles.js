import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  padding: 0 ${({ home }) => (home ? '2rem' : '0')};

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 414px) {
    gap: 1.25rem;
    padding: 0 ${({ home }) => (home ? '1.25rem' : '0')};
  }

  @media (max-width: 276px) {
    gap: 1.25rem;
    padding: 0 ${({ home }) => (home ? '1rem' : '0')};
  }
`;
