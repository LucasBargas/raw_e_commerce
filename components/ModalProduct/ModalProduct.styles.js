import styled, { keyframes } from 'styled-components';

const showModalArea = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -70px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const showModalContainer = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  height: 100vh;
  width: 100%;
  animation: ${showModalContainer} .4s forwards;

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 276px) {
    padding: 0 1rem;
  }
`;

export const ModalArea = styled.div`
  background: ${({ theme }) => theme.colors.lightColor};
  padding: 1.25rem 0;
  width: 70%;
  border-radius: 4px;
  animation: ${showModalArea} .4s forwards;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CloseModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: .5rem;

  button {
    display: inline-block;
    background: transparent;
    height: 2.25rem;
    width: 2.25rem;

    svg {
      color: ${({ theme }) => theme.colors.primaryColor};;
      font-size: 1.75rem;

      @media (max-width: 375px) {
        font-size: 1.5rem;
      }
    }
  }
`;