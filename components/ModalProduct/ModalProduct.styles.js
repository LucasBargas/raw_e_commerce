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
  background: rgba(0, 0, 0, .9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  height: 100vh;
  width: 100%;
  animation: ${showModalContainer} .4s forwards;

  @media (max-width: 1200px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  @media (max-width: 276px) {
    padding: 1rem;
  }
`;

export const ModalArea = styled.div`
  background: ${({ theme }) => theme.colors.lightColor};
  padding: 1.25rem 0 2.5rem 0;
  width: 80%;
  border-radius: 4px;
  animation: ${showModalArea} .4s forwards;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: .75rem 0 1.25rem 0;
  }
`;

export const CloseModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: .5rem;

  @media (max-width: 320px) {
    padding-right: .25rem;
  }

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

      @media (max-width: 320px) {
        font-size: 1.375rem;
      }
    }
  }
`;

export const ModalProductArea = styled.div`
  display: flex;
  padding: 0 2rem;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 414px) {
    gap: 1.25rem;
    padding: 0 1.25rem;
  }

  @media (max-width: 276px) {
    gap: 1.25rem;
    padding: 0 1rem;
  }
`;