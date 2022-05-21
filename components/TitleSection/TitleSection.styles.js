import styled from 'styled-components';

const TitleSectionContainer = styled.div`
  text-align: center;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : '1.75rem')};

  @media (max-width: 360px) {
    padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : '1.5rem')};
  }
  
  h2 {
    font-family: 'Anton-Regular';
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-size: 1.5625rem;

    @media (max-width: 360px) {
      font-size: 1.2rem;
    } 
  }
`;

export default TitleSectionContainer;
