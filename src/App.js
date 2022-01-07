import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 1090px;
  display: flex;
  flex-direction: column;
`;

const App = props => {
  const { 
    isPopUp,
    activeId,
    setPopUp,
    setActiveId,
  } = props;

  return (
    <Container>
      <Header 
        { ...props }
        // isPopUp={ isPopUp }
        // setPopUp={ setPopUp }
      />
      <Main 
        isPopUp={ isPopUp }
      />
      <Footer />
      {/* <button style={{ marginTop: "500px" }}>123</button> */}
    </Container>
  );
}

export default App;
