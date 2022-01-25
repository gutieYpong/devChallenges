import { useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";
import { size } from "./constants/breakpoints";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: 25.69vh auto 6vh; */
  grid-template-rows: 12vh auto 6vh;

  /* background-color: lightsalmon; */

  @media screen and ( max-width: ${ size.tablet } ) {
    grid-template-columns: 1fr 1fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr;
  }

  @media screen and ( max-width: ${ size.mobileL } ) {
    grid-template-columns: 1fr 1fr 1fr 5fr 5fr 5fr 5fr 5fr 5fr 1fr 1fr 1fr;
  }
`;

const App = props => {
  const {
    data, fetchData,
  } = props;

  useEffect(() => {
    fetchData(`quotes/random`);
  }, []);

  return (
    <Container>
      <Header fetchData={ fetchData } />
      <Main {...props} />
      <Footer />
    </Container>
  );
}

export default App;
