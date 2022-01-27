import { useEffect } from "react";
import styled, { css } from "styled-components";

import Main from "./components/Main";
import Footer from "./components/Footer";


const Container = styled.div( ({ BackGroundUrl }) => {
  return css`
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(${ BackGroundUrl });
    background-size: cover;
`}); 

const App = props => {
  const {
  } = props;

  return (
    <Container BackGroundUrl={ `${ process.env.PUBLIC_URL }/background.png` }>
      <Main {...props} />
      <Footer />
    </Container>
  );
}

export default App;
