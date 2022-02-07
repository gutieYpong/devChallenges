import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import lottie from "lottie-web/build/player/lottie_light";

import Main from "./components/Main";
import colorsAnimation from "./assets/animation/colors.json";
import getClientLocation from './features/getClientLocation';
import { fetchData } from './features/weatherSlice';
import { size } from "./constants/breakpoints";


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

const LoadingBackGround = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #1C1A2B;

  #colors-animation {
    width: 300px;
    height: 300px;
  }
`;

const App = () => {
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    (
      async() => {
        return await getClientLocation();
      }
    )()
      .then( res => {
        if( isSubscribed )
          return res;
        throw new Error('jump to end.');
      })
      .then( location => dispatch(fetchData(location)) )
      .then( () => setLoadingAnimation( false ) )
      .catch( error => console.log(error.message) );

    lottie.loadAnimation({
      container: document.querySelector('#colors-animation'),
      animationData: colorsAnimation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    })

    // cancel subscription to useEffect
    return () => (isSubscribed = false)
  }, []);

  return (
    <>
      {
        loadingAnimation ?
        <LoadingBackGround>
          <div id="colors-animation" />
        </LoadingBackGround>
        :
        <Container>
          <Main />
        </Container>
      }
    </>
  );
}

export default App;
