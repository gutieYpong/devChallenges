import styled from "styled-components";

import Main from "./components/Main";
import { size } from "./constants/breakpoints";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #1C1A2B;

  @media screen and ( max-width: ${ size.tablet } ) {
    height: auto;
    display: flex;
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and ( max-width: ${ size.tablet } ) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`; 

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
