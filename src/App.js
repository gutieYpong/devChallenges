import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useState, useEffect, useRef } from "react";

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

  // /**
  //  * Intersection Observer Implementation
  //  */
  // const containerRef = useRef(null)
  // const [ isVisible, setIsVisible ] = useState(false)

  // const callbackFunction = (entries) => {
  //   const [ entry ] = entries;
  //   setIsVisible(entry.isIntersecting);
  //   console.log("hiihi")
  // }
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options)
  //   if (containerRef.current) 
  //   {
  //     observer.observe(containerRef.current);
  //   }
  //   return () => {
  //     if(containerRef.current)
  //     {
  //       observer.unobserve(containerRef.current);
  //     }
  //   }
  // }, [containerRef, options])
  // /**
  // * Intersection Observer Implementation
  // */

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
