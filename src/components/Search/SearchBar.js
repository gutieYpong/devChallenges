import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { LOCATIONS } from "../../constants/common";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import SearchBtn from "./SearchBtn";


const Container = styled.div`
  width: ${ ({ IsPopUp }) => IsPopUp ? "100%" : "297px" };
  height: auto;

  transition: all .5s ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? ".5s" : "0s" };

  background-color: lightcoral;
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
  padding: 32px 96px 0 96px;
  /* transform: translateY(-50%); */
  visibility: ${ ({ IsPopUp }) => IsPopUp ? "visible" : "hidden" };
  opacity: ${ ({ IsPopUp }) => IsPopUp ? 1 : 0 };
  transition: all .5s ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };

  background-color: lightcyan;
  /* background-color: white; */
`;


const SearchBar = props => {
  const { 
    isPopUp,
    activeId,
    setPopUp,
    setActiveId,
  } = props;
  const ref = useRef();

  useOnClickOutside(ref, () => { 
    setPopUp( false ); 
    setActiveId( -1 );
  });

  return (
    <Container 
      ref={ ref }
      IsPopUp={ isPopUp }
    >
      <PopUpContainer IsPopUp={ isPopUp } />
      <SearchBarContainer 
        IsPopUp={ isPopUp } 
        onClick={ () => props.setPopUp( true ) }
      >
        <LocationInput { ...props } />
        <GuestsInput { ...props } />
        <SearchBtn { ...props } />
      </SearchBarContainer>
    </Container>
  )
}

export default SearchBar;