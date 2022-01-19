import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = props => {
  const { 
    isPopUp,
    locationInput,
    searchResult,
  } = props;

  return (
    <Container>
      <Header 
        { ...props }
      />
      <Main 
        isPopUp={ isPopUp }
        locationInput={ locationInput }
        searchResult={ searchResult }
      />
      <Footer />
    </Container>
  );
}

export default App;
