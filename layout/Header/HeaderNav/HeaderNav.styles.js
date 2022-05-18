import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;

  @media (max-width: 820px) {
    flex-direction: row;
    align-items: center;
    gap: .5rem;
  }
`;

export default NavContainer;