import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

import Property from "./Property";
import { INIT_PROPERTIES_NUM } from "../../constants/common";
import { size } from "../../constants/breakpoints";


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

  /* background-color: pink; */
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
  
  /* filter: ${ ({ IsPopUp }) => IsPopUp ? "blur(10px)" : "none" }; */
  z-index: ${ ({ IsPopUp }) => IsPopUp ? -1 : 0 };
  transition: all ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" } ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };
  
  /* background-color: cyan; */
  

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

  /* background-color: lightgrey; */
  
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
  width: 100%;
  height: 95%;
  display: grid;
  /* grid-template-rows: repeat(2, 330px); // minmax(a, b) */
  grid-template-columns: repeat(auto-fit, minmax(250px, 325px));
  grid-row-gap: 32px;
  justify-content: space-around;
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
  const [hasMore, setHasMore] = useState(false);
  const [propertyIdx, setPropertyIdx] = useState(INIT_PROPERTIES_NUM);
  const observer = useRef(null);

  // const lastElementRef = useRef(null)

  // const callbackFunction = (entries) => {
  //   const [ entry ] = entries;
  //   if( entry.isIntersecting )
  //   {
  //     //  只在目標元素進入 viewport 時執行這裡的工作
  //     if( (propertyIdx + 3) > searchResult.length )
  //     {
  //       setPropertyIdx( searchResult.length );
  //       setHasMore( false );
  //     }
  //     else
  //     {
  //       setPropertyIdx( preVal => preVal + 3 );
  //       setHasMore( true );
  //     }
  //   } 
  //   else
  //   {
  //     // 只在目標元素離開 viewport 時執行這裡的工作
  //   }
  // }

    const lastEleRef = useCallback( node => {
    if( loading ) return;
    if( observer.current ) observer.current.disconnect();

    const mainRoot = document.querySelector('#mainRoot');
    const options = {
      mainRoot,
      rootMargin: "0px",
      threshold: 1
    }

    observer.current = new IntersectionObserver( entries => { // callback
      const [ entry ] = entries;
      if( entry.isIntersecting && hasMore )
      {
        //  只在目標元素進入 viewport 時執行這裡的工作
        if( (propertyIdx + 3) > searchResult.length )
        {
          setPropertyIdx( searchResult.length );
        }
        else
        {
          setPropertyIdx( preVal => preVal + 3 );
        }
      } 
    }, options);

    if( node ) observer.current.observe( node );
  } , [loading, hasMore, propertyIdx, searchResult] );

  useEffect( () => {
    setPropertyIdx( searchResult.length <= INIT_PROPERTIES_NUM ? searchResult.length : INIT_PROPERTIES_NUM );
  }, [searchResult]);

  useEffect( () => {
    if( propertyIdx > searchResult.length ) return;

    const fetchList = async() => {
      setLoading( true );
      for( let i = 0 ; i < propertyIdx; i++ )
      {
        setStays( preVal => [...preVal, searchResult[i]] );
      }

      setHasMore( propertyIdx <= searchResult.length );
      setTimeout(() => setLoading( false ), 1000); // just to show the loading logo long enough
      // setLoading( false );
    };

    setStays([]);
    fetchList();
  }, [propertyIdx, searchResult]);

  // useEffect( () => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   if (lastElementRef.current) 
  //   {
  //     observer.observe(lastElementRef.current);
  //   }
  //   return () => {
  //     if(lastElementRef.current)
  //     {
  //       observer.unobserve(lastElementRef.current);
  //     }
  //   }
  // }, [lastElementRef, options])

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
                  // ref={ lastElementRef }
                  ref={ lastEleRef }
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
      </Container>
    </MainBackDrop>
  )
}

export default Main;