import styled from "styled-components";
import { LogoIcon } from "../constant/svg.icon";

const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 96px 0 96px;

  background-color: pink;
`;

const LogoStyled = styled.div`
  width: 96px;
  height: 18.75px;
`;

const Logo = () => {
  return (
    <LogoStyled>
      <LogoIcon />
    </LogoStyled>
  )
}

const InfoSearchBarContainer = styled.div`
  /* Layout */
  width: 297px;
  height: 55px;
  display: flex;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const Info = styled.span`
  /* Layout */
  flex-basis: 46.46%;
  width: 100%;

  /* Font Layout */
  font-family: "Mulish";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #333333;
`;

const SearchInputContainer = styled.div`
  /* Layout */
  flex-basis: 35.69%;
  width: 100%;
  height: 100%;

  background-color: grey;
`;

const SearchInputStyled = styled.input`
  /* Layout */
  width: 100%;
  height: 100%;
  border-top: 0;
  border-left: 1px solid #F2F2F2;
  border-right: 1px solid #F2F2F2;
  border-bottom: 0;
  outline: 0;
  padding: 18px 16px;

  &::placeholder {
    color: "#BDBDBD";
  }
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <SearchInputStyled placeholder="Add guests" />
    </SearchInputContainer>
  )
}

const SearchIconContainer = styled.div`
  position: relative;
  flex-basis: 17.85%;
  width: 100%;
  height: 100%;
`;

const SearchIcon = styled.span`
  position: absolute;
  width: 17.05px;
  height: 17.05px;
  top: 50%;
  left: 50%;
  transform: translate(-65%, -65%);
  color: "red";
`;

const InfoSearchBar = () => {
  return (
    <InfoSearchBarContainer>
      <Info children="Helsinki, Finland" />
      <SearchInput />
      <SearchIconContainer>
        <SearchIcon className="material-icons-outlined" children="search" />
      </SearchIconContainer>
    </InfoSearchBarContainer>
  )
}

const Header = () => {
  return (
    <Container>
      <Logo />
      <InfoSearchBar />
    </Container>
  )
}

export default Header;