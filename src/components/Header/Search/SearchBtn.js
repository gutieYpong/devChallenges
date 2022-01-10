import styled, { css } from "styled-components";
import { size } from "../../../constants/breakpoints";
import { Button } from "../../../stories/mine/Button";
import { STAYS } from "../../../constants/common";


const Container = styled.div`
  /* position: relative; */
  flex-basis: ${ ({ IsPopUp }) => IsPopUp ? "31.68%" : "17.85%" };
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ( max-width: ${ size.mobileM } ) {
    height: auto;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  width: 17.05px;
  height: 17.05px;
  color: #EB5757;
  cursor: pointer;
`;


const SearchBtn = props => {
  const { 
    className,
    isPopUp, setPopUp,
    locationInput, setLocationInput,
    guestsInput, setGuestsInput,
    searchResult, getSerachResult,
  } = props;

  return (
    <Container
      className={ className }
      IsPopUp={ isPopUp }
    >
      {
        isPopUp ?
        <Button 
          backgroundColor="#EB5757"
          color="#F2F2F2"
          label="Search"
          size="custom"
          startIcon="search"
          onClick={ () => getSerachResult( locationInput, guestsInput ) }
        /> :
        <SearchIcon className="material-icons-outlined" children="search" />
      }
    </Container>
  )
}

export default SearchBtn;