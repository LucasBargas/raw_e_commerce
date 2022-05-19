import * as S from "./HomeBg.styles";
import Container from '../../styles/Container';
import Themes from '../../styles/Themes';
import Button from "../Button/Button";


const HomeBg = () => {
  return (
    <S.HomeBgContainer>
      <Container>
        <S.HomeBgArea>
          <h1>Seja sempre original</h1>

          <S.CallToMoreProductions>
            <p>Novos itens disponíveisem nossa Loja</p>

            <Button 
              paddingTop='2rem'
              bgColor='transparent' 
              fontColor={`${Themes.colors.lightColor}`}
              borderColor={`${Themes.colors.lightColor}`}
              hoverBgColor={`${Themes.colors.lightColor}`}
              hoverFontColor={`${Themes.colors.primaryColor}`}
              hoverBorderColor={`${Themes.colors.lightColor}`}
            >
              Comprar
            </Button>
          </S.CallToMoreProductions>
        </S.HomeBgArea>
      </Container>
    </S.HomeBgContainer>
  )
}

export default HomeBg;
