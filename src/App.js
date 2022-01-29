import styled, { css } from "styled-components";

import backGround from'./assets/background.png';
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
  return (
    <Container BackGroundUrl={ backGround }>
      <Main {...props} />
      <Footer />
    </Container>
  );
}

export default App;
