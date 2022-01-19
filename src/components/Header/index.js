import styled from "styled-components";

import Search from "./Search";
import { LogoIcon } from "../../constants/svg.icon";
import { size } from "../../constants/breakpoints";


const HeaderBackDrop = styled.div`
  width: 100%;
  height: 20vh;
  min-height: 148px;
  display: flex;
  justify-content: center;

  /* background-color: pink; */
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  display: flex;
  justify-content: ${ ({ IsPopUp }) => IsPopUp === "100%" ? "flex-end" : "space-between" };
  align-items: center;
  padding: 32px 96px 0 96px;
  z-index: 0;

  /* background-color: lightseagreen; */

  @media screen and ( max-width: ${ size.tablet } ) {
    padding: 32px 29px 0 29px;
  }

  @media screen and ( max-width: ${ size.mobileM } ) {
    flex-direction: column;
    align-items: flex-start;
    padding: 22px 9px 9px 9px;
  }
`;

const LogoStyled = styled.div`
  width: ${ ({ IsPopUp }) => IsPopUp ? 0 : "96px" };
  height: ${ ({ IsPopUp }) => IsPopUp ? 0 : "18.75px" };
  visibility: ${ ({ IsPopUp }) => IsPopUp ? "hidden" : "visible" };
  opacity: ${ ({ IsPopUp }) => IsPopUp ? 0 : 1 };
  z-index: 2;
  transition: all ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" } ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };
  cursor: pointer;
`;

const Logo = props => {
  return (
    <LogoStyled IsPopUp={ props.isPopUp } onClick={ () => window.location.reload() }>
      <LogoIcon />
    </LogoStyled>
  )
}

const Header = props => {
  const { 
    isPopUp,
  } = props;

  return (
    <HeaderBackDrop>
    <Container IsPopUp={ isPopUp }>
      <Logo isPopUp={ isPopUp } />
      <Search { ...props } />
    </Container>
    </HeaderBackDrop>
  )
}

export default Header;