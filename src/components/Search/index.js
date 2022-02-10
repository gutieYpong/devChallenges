import styled from "styled-components";

import { fontLayout } from "../../constants/api";
import { BackGround } from "../../assets"


const Container = styled.div`
  width: 120.1rem;
  display: grid;
  grid-area: search;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ ({ BackGroundSrc }) => BackGroundSrc });
  background-size: cover;
  border-radius: .8rem;
`;

const InputBox = styled.form`
  position: relative;
  width: 79rem;
  height: 5.5rem;
`;

const WorkIcon = styled.span.attrs( () => ({
  className: 'material-icons-outlined'
}))`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.75rem;
  font-size: 1.5rem;
  color: ${ ({ theme }) => theme.palette.grey };
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: 0 .2rem .8rem rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: .4rem;
  padding-left: 4.2rem;
  outline: 0;

  &::placeholder {
    ${ ({ theme }) => fontLayout('Roboto', 'normal', '1.2rem', '1.4rem', theme.palette.grey) }
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  width: 14.6rem;
  height: 4.7rem;
  top: .4rem;
  right: .4rem;
  background: ${ ({ theme }) => theme.palette.primary.main };
  border: 0;
  border-radius: .4rem;
  cursor: pointer;

  ${ ({ theme }) => fontLayout('Roboto', '500', '1.6rem', '1.9rem', theme.palette.white) }
`;

const Search = props => {
  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <Container>
      <SearchBox BackGroundSrc={ BackGround }>
        <InputBox onSubmit={ handleSubmit }>
          <WorkIcon children="work_outline" />
          <InputField
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
          <SearchBtn
            children="Search"
          />
        </InputBox>
      </SearchBox>
    </Container>
  )
}

export default Search;