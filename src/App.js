import styled from "styled-components";

import Header from "./components/Header"
import Main from "./containers/MainContainer";
import Footer from "./components/Footer";


const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 104px auto 65px;
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
