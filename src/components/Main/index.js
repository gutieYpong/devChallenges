import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { STAYS } from "../../constants/common";
import { size, breakpoints } from "../../constants/breakpoints";

import Property from "./Property";
import { set } from "lodash";

const MainBackDrop = styled.div`
  /* Layout */
  width: 100%;
  height: 100%;
  /* height: 70vh; */
  /* max-height: 847px; */
  min-height: 70vh;
  display: flex;
  justify-content: center;
  z-index: ${ ({ IsPopUp }) => IsPopUp ? -1 : 0 };
  margin-bottom: 10vh; // config of sticky bottom

  background-color: pink;
`;

const Container = styled.div`
  /* Layout */
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: auto;
  /* min-height: 100%; // 847px */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 99px;
  
  filter: ${ ({ IsPopUp }) => IsPopUp ? "blur(10px)" : "none" };
  z-index: ${ ({ IsPopUp }) => IsPopUp ? -1 : 0 };
  transition: all ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" } ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };
  
  background-color: cyan;
  

  @media screen and ( max-width: ${ size.tablet } ) {
    padding: 0 45px;
  }

  @media screen and ( max-width: ${ size.mobileM } ) {
    padding: 0 9px;
  }
`;

const MainThreadStyled = styled.div`
  /* Layout */
  width: 100%;
  min-width: 345px; // propety min-width
  height: 15%;
  max-height: 106px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: lightgrey;
  
  p:nth-child(1) {
    /* Font layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
  }
  p:nth-child(2) {
    /* Font layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
  }
`;

const MainThread = () => {
  return (
    <MainThreadStyled>
      <p>Stays in Finland</p> 
      <p>12+ stays</p>
    </MainThreadStyled>
  )
}

const PropertyList = styled.div`
  /* Layout */
  /* width: 100%; */
  width: auto;
  height: 95%;
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
  display: grid;
  grid-template-rows: repeat(2, 330px [row-start]);
  grid-template-columns: repeat(3, 365px [col-start]);
  grid-row-gap: 32px;
  grid-column-gap: 50px;

  padding: 8px 0 78px 0;
`;

const Observer = styled.div`
  /* Layout */
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  margin: 15px auto;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #60A917;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  /* margin-bottom: -10vh; */

  /* background-color: lightyellow; */

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Main = props => {
  const { 
    isPopUp, 
    searchResult
  } = props;

  /**
   * Intersection Observer Implementation
   */
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [propertyIdx, setPropertyIdx] = useState(6);
  const lastElementRef = useRef(null)

  const mainRoot = document.querySelector('#mainRoot');
  const NUM_OF_STAYS = searchResult.length;

  const options = {
    mainRoot,
    rootMargin: "0px",
    threshold: 1
  }

  const fetchList = async() => {
    console.log(`fetchList called.`)
    setLoading( true );
    for( let i = 0 ; i < propertyIdx; i++ )
    {
      setStays( preVal => [...preVal, searchResult[i]] );
    }
    // setTimeout(() => setLoading( false ), 2000);
    setLoading( false );
  }

  const callbackFunction = (entries) => {
    console.log(`callback called.`)
    const [ entry ] = entries;
    if (entry.isIntersecting) {
      //  只在目標元素進入 viewport 時執行這裡的工作
      console.log(`callback if entered. propertyIdx: ${propertyIdx}`)
      if( (propertyIdx + 3) > NUM_OF_STAYS )
        setPropertyIdx( NUM_OF_STAYS );
      else
        setPropertyIdx( preVal => preVal + 3 );

      console.log(`propertyIdx after: ${propertyIdx}`)
    } else {
      // 只在目標元素離開 viewport 時執行這裡的工作
    }
  }

  useEffect(() => {
    console.log(`useEffect1 called. propertyIdx: ${propertyIdx}`)
    if( propertyIdx <= NUM_OF_STAYS )
    {
      setStays([]);
      fetchList();
    }
  }, [propertyIdx, searchResult]);

  useEffect( () => {
    console.log(`useEffect2 called.`)
    const observer = new IntersectionObserver(callbackFunction, options);
    if (lastElementRef.current) 
    {
      observer.observe(lastElementRef.current);
    }
    return () => {
      if(lastElementRef.current)
      {
        observer.unobserve(lastElementRef.current);
      }
    }
  }, [lastElementRef, options])
  /**
   * Intersection Observer Implementation
   */

  return (
    <MainBackDrop IsPopUp={ isPopUp }>
      <Container IsPopUp={ isPopUp } id="mainRoot">
        <MainThread />
        <PropertyList>
          {
            stays.length > 0 &&
            stays.map( ( item, index ) =>
            {
              return stays.length - 1 === index && !loading ? 
                ( <Property 
                  ref={ lastElementRef }
                  key={ index }
                  property={ item }
                  className={`${index} ref`}
                /> ) :
                ( <Property
                  key={ index }
                  property={ item }
                  className={`${index}`}
                /> )
            })
          }
        </PropertyList>
        { loading && <Observer /> }
        {/* <Observer ref={ containerRef } /> */}
        {/* <PropertyList>
          {
            searchResult &&
            searchResult.map( ( item, index ) =>
              <Property key={ index } property={ item } />
            )
          }
        </PropertyList> */}
      </Container>
    </MainBackDrop>
  )
}

export default Main;