import styled, { css } from "styled-components";
import { Button } from "../../stories/mine/Button";


const Container = styled.div`
  /* position: relative; */
  flex-basis: ${ ({ IsPopUp }) => IsPopUp ? "31.68%" : "17.85%" };
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    isPopUp,
    activeId,
    setPopUp,
    setActiveId,
  } = props;

  return (
    <Container 
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
        /> :
        <SearchIcon className="material-icons-outlined" children="search" />
      }
    </Container>
  )
}

export default SearchBtn;