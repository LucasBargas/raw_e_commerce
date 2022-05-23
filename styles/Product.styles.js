import styled from 'styled-components';

export const ProductContainer = styled.section`
  padding: 3rem 0 4rem 0;
`;

export const ProductArea = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 414px) {
    gap: 1.25rem;
  }

  @media (max-width: 276px) {
    gap: 1.25rem;
  }
`;

export const ProductionDesc = styled.div`
  padding-top: 1.25rem;

  @media (max-width: 820px) {
    text-align: center;
  }

  p {
    line-height: 1.375rem;  
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;