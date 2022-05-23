import ShowcaseArea from "./Showcase.styles";

const Showcase = ({ paddingBottom, children }) => {
  return (
    <ShowcaseArea paddingBottom={paddingBottom}>
      {children}
    </ShowcaseArea>
  )
}

export default Showcase;
