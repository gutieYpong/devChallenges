import { useRef } from "react";
import styled from "styled-components";
import { LogoIcon } from "../constants/svg.icon";
import { setPopUp } from "../redux/actions/actions";
import SearchBar from "./Search/SearchBar";
import useOnClickOutside from "../hooks/useOnClickOutside";


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 148px;
  display: flex;
  justify-content: ${ ({ IsPopUp }) => IsPopUp === "100%" ? "flex-end" : "space-between" };
  align-items: center;
  padding: 32px 96px 0 96px;
  z-index: 0;

  background-color: pink;
`;

const PopUpContainer = styled.div`
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
  /* z-index: 1; */

  background-color: lightcyan;
`;

const LogoStyled = styled.div`
  width: ${ ({ IsPopUp }) => IsPopUp ? 0 : "96px" };
  height: ${ ({ IsPopUp }) => IsPopUp ? 0 : "18.75px" };
  visibility: ${ ({ IsPopUp }) => IsPopUp ? "hidden" : "visible" };
  opacity: ${ ({ IsPopUp }) => IsPopUp ? 0 : 1 };
  z-index: 2;
  transition: all ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" } ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };
`;

const Logo = props => {
  return (
    <LogoStyled IsPopUp={ props.isPopUp }>
      <LogoIcon />
    </LogoStyled>
  )
}

const Header = props => {
  const { 
    isPopUp,
    activeId,
    setPopUp,
    setActiveId,
  } = props;
  // const ref = useRef();

  // useOnClickOutside(ref, () => setPopUp(false));

  return (
    <Container IsPopUp={ isPopUp }>
      {/* <PopUpContainer IsPopUp={ isPopUp } /> */}
      <Logo isPopUp={ isPopUp } />
      <SearchBar
        { ...props }
      />
    </Container>
  )
}

export default Header;