import styled from 'styled-components';

export const ProductSliderContainer = styled.div`
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const SliderArea = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;

  span {
    display: block !important;
    width: 100% !important;
    opacity: 0 !important;
    transition: .4s;
    
    &:nth-of-type(2) {
      position: absolute !important;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &.show {
      opacity: 1 !important;
    }

    img {
      display: block !important;
      width: 100% !important;
    }
  }
`;

export const SliderController = styled.div`
  display: flex;
  justify-content: center;

  span {
    display: inline-block;
    cursor: pointer;
    height: .75rem;
    width: .75rem;
    border-radius: 50%;
    background: #808080;
    margin: 0 .2rem;
    text-indent: -10000px;

    @media (max-width: 320px) {
      height: .625rem;
      width: .625rem;
    } 

    &.active {
      background: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;
