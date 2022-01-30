import styled from "styled-components";

import Main from "./components/Main";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  background-color: lightpink;
`; 

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
