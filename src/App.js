import styled from "styled-components";

import Main from "./components/Main";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #1C1A2B;
`; 

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
