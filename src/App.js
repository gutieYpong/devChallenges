import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  max-height: 1090px;
  display: flex;
  flex-direction: column;
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
