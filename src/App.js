import styled from "styled-components";

import Header from "./components/Header"
import Main from "./containers/MainContainer";
import Footer from "./components/Footer";
import { size } from "./constants/breakpoints";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 104px auto 65px;

  /* background-color: lightsalmon; */

  @media screen and ( max-width: ${ size.tablet } ) {
    grid-template-columns: 1fr 1fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr;
  }

  @media screen and ( max-width: ${ size.mobileL } ) {
    grid-template-columns: 1fr 1fr 1fr 5fr 5fr 5fr 5fr 5fr 5fr 1fr 1fr 1fr;
  }
`;

const App = () => {

  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
