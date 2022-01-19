import { useState } from "react";
import styled, { css } from "styled-components";

import Label from "./Label";
import { size } from "../../../constants/breakpoints";


const GuestsInputContainer = styled.div( ({ IsFocus, IsPopUp }) => {
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
        border-bottom: 0;
        padding: ${ ({ IsPopUp }) => IsPopUp && "8px 16px 8px 16px" };
      }
    `;

  return css`
    /* Layout */
    position: relative;
    flex-basis: ${ ({ IsPopUp }) => IsPopUp ? "34.16%" : "35.69%" };
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
      flex-basis: ${ ({ IsPopUp }) => IsPopUp ? "50%" : "35.69%" };
      /* padding: 8px 27px 8px 27px; */
      /* padding: ${ ({ IsPopUp }) => IsPopUp ? "8px 16px 8px 16px" : "8px" }; */
    }
  `
});

const GuestsInputStyled = styled.input`
  /* Layout */
  width: 100%;
  height: ${ ({ IsPopUp }) => IsPopUp ? "auto" : "100%" };

  border: 0;
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

const GuestsCounterContainer = styled.div`
  /* Layout */
  position: absolute;
  width: 90%;
  height: 300px;
  top: 55px;
  left: 20px;
  padding: 42px 15px;

  /* background-color: pink; */
`;

const GuestCounterPickerStyled = styled.div`
  /* Layout */
  width: 100%;
  height: 71px;
  margin-bottom: 52px;

  /* Font layout */
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #333333;

  p {
    /* Layout */
    margin: 0;
  }
  p:nth-child(1) {
    font-weight: 700;
  }
  p:nth-child(2) {
    color: #BDBDBD;
  }

  div {
    /* Layout */
    width: 85px;
    height: 23px;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

    /* Font layout */
    line-height: 23px;
    
    input[type=button] {
      /* Layout */
      width: 23px;
      height: 23px;
      border: 1px solid #828282;
      border-radius: 4px;
      color: #828282;
      padding: 5px;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

const GuestCounterPicker = ({ Title, SubTitle, State, SetState, GuestsInput, SetGuestsInput }) => {
  const counterHandler = ( action, state, setState ) => {
    if( state < 100 && action === "plus" )
    {
      setState( state + 1 );

      if( GuestsInput === "" )
        SetGuestsInput( 1 );
      else
        SetGuestsInput( GuestsInput + 1 );
    }
    if( state > 0 && action === "minus" )
    {
      setState( state - 1 );
      SetGuestsInput( GuestsInput - 1 );
    }
  }

  return (
    <GuestCounterPickerStyled>
      <p>{ Title }</p>
      <p>{ SubTitle }</p>
      <div>
        <input
          type="button"
          value="+"
          onClick={ () => counterHandler( "plus", State, SetState ) }
        />
        <span>{ State }</span>
        <input
          type="button"
          value="-"
          onClick={ () => counterHandler( "minus", State, SetState ) }
        />
      </div>
    </GuestCounterPickerStyled>
  )
}

const GuestsCounter = props => {
  const {
    adults, setAdults,
    children, setChildren,
    guestsInput, setGuestsInput,
  } = props;

  return (
    <GuestsCounterContainer>
      <GuestCounterPicker
        Title="Adults"
        SubTitle="Ages 13 or above"
        State={ adults }
        SetState={ setAdults }
        GuestsInput={ guestsInput }
        SetGuestsInput={ setGuestsInput }
      />
      <GuestCounterPicker
        Title="Children"
        SubTitle="Ages 2-12"
        State={ children }
        SetState={ setChildren }
        GuestsInput={ guestsInput }
        SetGuestsInput={ setGuestsInput }
      />
    </GuestsCounterContainer>
  )
}

const GuestsInput = props => {
  const { 
    isPopUp, setPopUp,
    guestsInput, setGuestsInput,
  } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const onChange = ( e ) => {
    setGuestsInput( Number( e.target.value ) );
  };

  return (
    <GuestsInputContainer
      tabIndex={ 0 }
      IsPopUp={ isPopUp }
      IsFocus={ isFocus }
      onClick={ () => setPopUp( true ) }
      onFocus={ () => setIsFocus( true ) }
      onBlur={ (e) => {
        if ( !e.currentTarget.contains(e.relatedTarget) ) {
          setIsFocus( false );
        }
      } }
    >
      { props.isPopUp && <Label children="GUESTS" /> }
      <GuestsInputStyled 
        type="text"
        onChange={ onChange }
        value={ guestsInput }
        placeholder="Add guests"
        IsPopUp={ isPopUp }
        readOnly
      />
      { guestsInput >= 0 && isPopUp && isFocus &&
        <GuestsCounter
          tabIndex={ 0 }
          adults={ adults } setAdults={ setAdults }
          children={ children } setChildren={ setChildren }
          guestsInput={ guestsInput } setGuestsInput={ setGuestsInput }
        />
      }
    </GuestsInputContainer>
  )
};

export default GuestsInput;