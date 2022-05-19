import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9000;
  padding: .75rem 0;
  box-shadow: rgb(0, 0, 0, .1) 0px 2px 15px;
  background: ${({ theme }) => theme.colors.lightColor};
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

