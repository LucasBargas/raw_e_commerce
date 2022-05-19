import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
  ${({ paddingTop }) => paddingTop && css`
    padding-top: ${paddingTop};
  `}

  a {
    display: inline-block;
    background: ${({ bgColor }) => bgColor};
    color: ${({ fontColor }) => fontColor};
    border: 2px solid ${({ borderColor }) => borderColor};
    padding: 10px 20px;
    transition: .4s;

    &:hover {
      background: ${({ hoverBgColor }) => hoverBgColor};
      color: ${({ hoverFontColor }) => hoverFontColor};
      border: 2px solid ${({ hoverBorderColor }) => hoverBorderColor};
    }
  }
`;

export default ButtonContainer;
