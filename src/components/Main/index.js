import styled from "styled-components";
import { STAYS } from "../../constants/common";
import { size, breakpoints } from "../../constants/breakpoints";

import Property from "./Property";

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
  width: 100%;
  max-width: 1440px;
  height: auto;
  /* min-height: 100%; // 847px */
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
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 8px 0 78px 0;
`;

const Main = props => {
  const { isPopUp, searchResult } = props;

  return (
    <MainBackDrop IsPopUp={ isPopUp }>
      <Container IsPopUp={ isPopUp }>
        <MainThread />
        <PropertyList>
          {
            searchResult.map( ( item, index ) =>
              ( index < 20 ) && <Property key={ index } property={ item } />
            )
          }
        </PropertyList>
      </Container>
    </MainBackDrop>
  )
}

export default Main;