import Link from "next/link";
import ButtonContainer from "./Button.styles";

const Button = ({ paddingTop, bgColor, fontColor, borderColor, hoverBgColor, hoverFontColor, hoverBorderColor, children }) => {
  return (
    <ButtonContainer 
      paddingTop={paddingTop} 
      bgColor={bgColor} 
      fontColor={fontColor} 
      borderColor={borderColor}
      hoverBgColor={hoverBgColor}
      hoverFontColor={hoverFontColor}
      hoverBorderColor={hoverBorderColor}
    >
      <Link href='/loja'>
        <a>{children}</a>
      </Link>
    </ButtonContainer>
  )
}

export default Button;
