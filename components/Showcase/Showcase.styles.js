import styled from 'styled-components';

const ShowcaseArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export default ShowcaseArea;
