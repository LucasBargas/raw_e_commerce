import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9000;
  padding: .5rem 0;
  background: ${({ theme }) => theme.colors.lightColor};
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

