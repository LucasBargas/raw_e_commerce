import TitleSectionContainer from "./TitleSection.styles";

const TitleSection = ({ paddingBottom, children }) => {
  return (
    <TitleSectionContainer paddingBottom={paddingBottom}>
      <h2>{children}</h2>
    </TitleSectionContainer>
  )
}

export default TitleSection;
