import styled from 'styled-components';

const TitleSectionContainer = styled.div`
  text-align: center;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : '1.75rem')};
  
  h2 {
    font-family: 'Anton-Regular';
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.5625rem;
  }
`;

export default TitleSectionContainer;
