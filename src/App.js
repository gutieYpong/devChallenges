import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Container = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1440px; */
  /* min-height: 1090px; */
  display: flex;
  flex-direction: column;
`;

const App = props => {
  const { 
    isPopUp, setPopUp,
    locationInput, setLocationInput,
    guestsInput, setGuestsInput,
    searchResult, getSerachResult,
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
