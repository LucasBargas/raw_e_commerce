import styled from 'styled-components';
import { css } from 'styled-components';

export const NavBarArea = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3rem;

  @media (max-width: 820px) {
    padding-right: 1rem;
  }

  nav {
    position: relative;

    @media (max-width: 820px) {
      background: ${({ theme }) => theme.colors.primaryColor};
      overflow-y: auto;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9999;
      height: 100vh;
      width: 55%;
      transform: translate3d(100%, 0, 0);
      transition: .5s;

      ${({ menu })  => menu && css`
        transform: translate3d(0, 0, 0);
        transition: .5s;
      `}
    }

    @media (max-width: 700px) {
      width: 65%;
    }

    @media (max-width: 414px) {
      width: 100%;
    }
    
    ul {
      display: flex;
      gap: 1.75rem;

      @media (max-width: 820px) {
        padding: 0 2rem 2rem 2rem;
        flex-direction: column;
        gap: 0;
      }

      a {
        display: block;
        color: ${({ theme }) => theme.colors.primaryColor};
        padding: .5rem 0;
        position: relative;

        @media (max-width: 820px) {
          color: ${({ theme }) => theme.colors.lightColor};
          padding: 1rem 0;
        }

        &::after {
          content: '';
          height: 2px;
          width: 0;
          background: ${({ theme }) => theme.colors.primaryColor};
          position: absolute;
          bottom: 5px;
          left: 0;
          transition: .5s;

          @media (max-width: 820px) {
            background: ${({ theme }) => theme.colors.lightColor};
          }
        }

        &:hover {
          &::after {
            width: 100%;
          }
        }

        &.activeLink {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const NavBarCloseMobile = styled.div`
  display: none;
  align-items: center;
  padding: 1rem .5rem .5rem .5rem;

  @media (max-width: 820px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 2rem;
    background: transparent;
    padding: .2rem;
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;

export const NavBarOpenMobile = styled.div`
  display: none;
  align-items: center;

  @media (max-width: 820px) {
    display: flex;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 1.75rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const NavBarMedias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: 6rem;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.lightColor};

  @media (max-width: 214px) {
    bottom: 3rem;
  }

  svg {
    display: inline-block;
    cursor: pointer;
    font-size: 1.625rem;
    margin: 0 .5rem;

    @media (max-width: 214px) {
      font-size: 1.25rem;
    }
  }
`;