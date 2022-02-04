import styled from "styled-components";

import Main from "./components/Main";
import { size } from "./constants/breakpoints";

import React,{ useEffect,useState } from 'react'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #1C1A2B;

  @media screen and ( max-width: ${ size.tablet } ) {
    height: auto;
    display: flex;
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and ( max-width: ${ size.tablet } ) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`; 

const App = () => {
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('/api/location/44418/', { mode:'cors' });
  //     // const response = await fetch('https://www.metaweather.com/api/location/44418/', { mode:'cors' });
  //     const data = await response.json();
  //     console.log({ data })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   makeAPICall();
  // }, [])

  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
