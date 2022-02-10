import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import { Container, Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components";
import lottie from "lottie-web/build/player/lottie_light";

import Header from './components/Header';
import Search from "./components/Search";
import Option from './components/Option'
import Content from './components/Content';
import Footer from './components/Footer';
import colorsAnimation from "./assets/animation/colors.json";
import { size } from "./constants/breakpoints";


const theme = createTheme({
  palette: {
    primary: {
      main: '#1E86FF',
      dark: '#334680',
    },
    white: '#FFFFFF',
    grey: '#B9BDCF',
    black: '#282538',
    background: '#F6F7FB',
    loadingBackground: '#1C1A2B',

    // primary: {
      //*light: will be calculated from palette.primary.main,
      // main: '#ff4400',
      //* dark: will be calculated from palette.primary.main,
      //* contrastText: will be calculated to contrast with palette.primary.main
    // },
    // secondary: {
    //   main: '#0044ff',
    // },

    //* Used by `getContrastText()` to maximize the contrast between
    //* the background and the text.
    // contrastThreshold: 3,
    //* Used by the functions below to shift a color's luminance by approximately
    //* two indexes within its tonal palette.
    //* E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  }
});

const LoadingBackGround = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: ${ ({ theme }) => theme.palette.loadingBackground };

  #colors-animation {
    width: 300px;
    height: 300px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 124.1rem;
  max-height: 124.1rem; // 1241px
  display: grid;
  justify-items: center;
  background: ${ ({ theme }) => theme.palette.background };
`;

const Box = styled.div`
  width: 120.1rem;
  height: 100%;
  display: grid;
  grid-template-areas:
    "header header"
    "search search"
    "option content"
    "footer footer";
  grid-template-rows: 10rem 13.8rem 85rem auto;
`;


const App = () => {
  // const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    // (
    //   async() => {
    //     const location = await getClientLocation();
    //     if( isSubscribed )
    //       await dispatch(fetchData(location))
    //     else
    //       throw new Error('jump to end.');
    //   }
    // )()
    //   .then( () => setLoadingAnimation( false ) )
    //   .catch( error => console.log(error.message) );

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
    <ThemeProvider theme={theme}>
      {
        loadingAnimation ?
        <LoadingBackGround>
          <div id="colors-animation" />
        </LoadingBackGround>
        :
        <Container
        >
          <Box>
            <Header />
            <Search />
            <Option />
            <Content />
            <Footer />
          </Box>
        </Container>
      }
    </ThemeProvider>
  );
}

export default App;
