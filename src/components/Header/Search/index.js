import { useRef } from "react";
import styled from "styled-components";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import SearchBtn from "./SearchBtn";
import { size } from "../../../constants/breakpoints";


const Container = styled.div`
  width: ${ ({ IsPopUp }) => IsPopUp ? "100%" : "297px" };
  height: auto;

  transition: all .5s ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? ".5s" : "0s" };

  /* background-color: lightcoral; */

  @media screen and ( max-width: ${ size.mobileM } ) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const SearchBarContainer = styled.div`
  /* Layout */
  position: relative;
  width: ${ ({ IsPopUp }) => IsPopUp ? "100%" : "297px" }; // 297px or 100%
  height: 55px;
  display: flex;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: all .5s ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? ".5s" : "0s" };

  .search-submit__desktop {
    display: flex;
  }

  @media screen and ( max-width: ${ size.mobileM } ) {
    height: ${ ({ IsPopUp }) => IsPopUp ? "100px" : "55px" };
    flex-direction: ${ ({ IsPopUp }) => IsPopUp ? "column" : "row" };

    .search-submit__desktop {
      display: ${ ({ IsPopUp }) => IsPopUp ? "none" : "flex" };
    }
  }
`;

const PopUpContainer = styled.div`
  /* Layout */
  position: absolute;
  width: 100%;
  height: 460px;
  top: ${ ({ IsPopUp }) => IsPopUp ? 0 : "-100%" };
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 96px 32px 96px;
  visibility: ${ ({ IsPopUp }) => IsPopUp ? "visible" : "hidden" };
  opacity: ${ ({ IsPopUp }) => IsPopUp ? 1 : 0 };
  transition: all .5s ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };
  background-color: #FFFFFF;

  .search-submit__mobile {
    display: none;
  }

  @media screen and ( max-width: ${ size.mobileM } ) {
    height: 75vh;
    justify-content: center;
    align-items: flex-end;

    .search-submit__mobile {
      display: flex;
    }

    &::before {
      position: absolute;
      content: "Edit your search";
      top: 5%;
      left: 5%;
      
      /* Font layout */
      font-family: "Mulish";
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      color: #333333;
    }
  }
`;


const Search = props => {
  const { 
    isPopUp, setPopUp,
  } = props;
  const ref = useRef();

  useOnClickOutside( ref, () => setPopUp( false ) );

  return (
    <Container 
      ref={ ref }
      IsPopUp={ isPopUp }
    >
      <PopUpContainer IsPopUp={ isPopUp }>
        <SearchBtn className="search-submit__mobile" { ...props } />
      </PopUpContainer>
      <SearchBarContainer
        IsPopUp={ isPopUp }
      >
        <LocationInput { ...props } />
        <GuestsInput { ...props } />
        <SearchBtn className="search-submit__desktop" { ...props } />
      </SearchBarContainer>
    </Container>
  )
}

export default Search;