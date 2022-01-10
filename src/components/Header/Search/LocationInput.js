import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { LOCATIONS } from "../../../constants/common";
import Label from "./Label";
import { size } from "../../../constants/breakpoints";

const LocationInputContainer = styled.div( ({ IsPopUp, IsFocus }) => {
  const borderLayout = IsPopUp && IsFocus ?
    `
      border: 1px solid #333333;
      filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
      border-radius: 16px;
    ` 
      :
    `
      border-top: 0;
      border-left: 0;
      border-right: 1px solid #F2F2F2;
      border-bottom: 0;

      @media screen and ( max-width: ${ size.mobileM } ) {
        border-top: 0;
        border-left: 0;
        border-right: ${ ({ IsPopUp }) => IsPopUp ? "0" : "1px solid #F2F2F2" };
        border-bottom: ${ ({ IsPopUp }) => IsPopUp ? "1px solid #F2F2F2" : "0" };
        padding: ${ ({ IsPopUp }) => IsPopUp ? "8px 16px 8px 16px" : "0" };
      }
    `;

  return css`
    position: relative;
    /* Layout */
    flex-basis: ${ ({ IsPopUp }) => IsPopUp ? "34.16%" : "46.46%" };
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* Border layout */
    ${ borderLayout }

    padding: ${ ({ IsPopUp }) => IsPopUp ? "12px 27px 10px 27px" : "0px" };
    transition: all .5s ease;

    /* background-color: grey; */

    @media screen and ( max-width: ${ size.mobileM } ) {
      flex-basis: ${ ({ IsPopUp }) => IsPopUp ? "50%" : "46.46%" };
    }
  `
});

const LocationInputStyled = styled.input`
  /* Layout */
  width: 100%;
  height: ${ ({ IsPopUp }) => IsPopUp ? "auto" : "100%" };

  border: 0;
  border-radius: ${ ({ IsPopUp }) => IsPopUp ? 0 : "16px" };
  outline: 0;
  padding: ${ ({ IsPopUp }) => IsPopUp ? "0px" : "18px 16px" };

  /* Font layout */
  font-family: "Mulish";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;

  &::placeholder {
    color: "#BDBDBD";
  }
`;

const SuggestionsContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 300px;
  top: 55px;
  left: 20px;
  padding: 42px 5px;

  background-color: pink;

  @media screen and ( max-width: ${ size.mobileM } ) {
    top: 105px;
  }

  ul {
    /* Layout */
    width: 100%;
    height: 180px;
    list-style: none;
    overflow-y: auto;
    padding-left: 0;
    
    background-color: lightseagreen;

    .suggestion-container {
      display: flex;
      align-items: center;

      &:not(:last-of-type) {
        margin-bottom: 36px;
      }

      .material-icons {
        margin-right: 10px;
        font-size: 19px;
        /* color: "#4F4F4F"; */
      }

      .suggestion {
        /* Font layout */
        font-family: "Mulish";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #4F4F4F;

        &:hover, &.suggestion-active {
          background: linear-gradient(
            90deg,
            hsla(218, 100%, 42%, 0.6) 0%,
            hsla(0, 0%, 98%, 1) 200%
          );
          font-weight: 700;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
    }

    &::-webkit-scrollbar {
        width: 0.2rem;
        height: 0rem;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: hsla(218, 100%, 42%, 1);
    }
  }
`;

const SuggestionsFound = ({ ActiveSuggestionIndex, FilteredSuggestions, onClick }) => {
  return (
    <SuggestionsContainer>
      <ul className="suggestions">
        {
          FilteredSuggestions.map( ( suggestion, index ) => {
            let className;
            // Flag the active suggestion with a class
            if(index === ActiveSuggestionIndex)
            {
              className = "suggestion-active";
            }
            else
            {
              className = "suggestion-inactive";
            }


            return (
              <div key={ `suggestion-id-${index}` } className="suggestion-container">
                <span className="material-icons">place</span>
                <li
                  className={ `suggestion ${ className }` }
                  onClick={ onClick }
                  children={ suggestion }
                />
              </div>
            );
        })}
      </ul>
    </SuggestionsContainer>
  )
}

const SuggestionsNotFound = () => {
  return (
    <SuggestionsContainer>
      <span role="img" aria-label="tear emoji">😪</span>
      <em>sorry no suggestions</em>
    </SuggestionsContainer>
  )
}

const LocationInput = props => {
  const { 
    isPopUp, setPopUp,
    locationInput, setLocationInput,
  } = props;
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocus, setIsFocus] = useState( false );


  const onChange = ( e ) => {
    const userInput = e.target.value;

    // ? Filter our suggestions that don't contain the user's input
    // ! Get the suggestions that contain the user's input
    const unLinked = LOCATIONS.filter(( location ) =>
      location.toLowerCase().indexOf( userInput.toLowerCase() ) > -1
    );

    setLocationInput( e.target.value );
    setFilteredSuggestions( unLinked );
    setActiveSuggestionIndex( 0 );
    setShowSuggestions( true );
  };

  const onClick = ( e ) => {
    setLocationInput( e.target.innerText );
    setFilteredSuggestions([]);
    setActiveSuggestionIndex( 0 );
    setShowSuggestions( false );
  };

  const onKeyDown = ( e ) => {
    // User pressed the enter key
    if ( e.keyCode === 13 ) {
      setLocationInput( filteredSuggestions[activeSuggestionIndex] );
      setActiveSuggestionIndex( 0 );
      setShowSuggestions( false );
    }
    // User pressed the up arrow
    else if ( e.keyCode === 38 ) {
      if ( activeSuggestionIndex === 0 ) {
        return;
      }

      setActiveSuggestionIndex( activeSuggestionIndex - 1 );
    }
    // User pressed the down arrow
    else if ( e.keyCode === 40 ) {
      if ( activeSuggestionIndex - 1 === filteredSuggestions.length ) {
        return;
      }

      setActiveSuggestionIndex( activeSuggestionIndex + 1 );
    }
  };

  const SuggestionsList = () => {
    return filteredSuggestions.length ? (
      <SuggestionsFound 
        ActiveSuggestionIndex={ activeSuggestionIndex }
        FilteredSuggestions={ filteredSuggestions }
        onClick={ onClick }
      />
    ) : (
      <SuggestionsNotFound />
    );
  };

  return (
    <LocationInputContainer 
      tabIndex={ 0 }
      IsPopUp={ isPopUp }
      IsFocus={ isFocus }
      onFocus={ () => setIsFocus( true ) }
      onBlur={ (e) => {
        if ( !e.currentTarget.contains(e.relatedTarget) ) {
          setIsFocus( false );
        }
      } }
    >
      { props.isPopUp && <Label className="label" children="LOCATION" /> }
      <LocationInputStyled 
        type="text"
        onChange={ onChange }
        onKeyDown={ onKeyDown }
        value={ locationInput }
        placeholder="Add location"
        IsPopUp={ isPopUp }
      />
      { showSuggestions && locationInput && isFocus && <SuggestionsList tabIndex={ 0 } /> }
    </LocationInputContainer>
  )
};

export default LocationInput;