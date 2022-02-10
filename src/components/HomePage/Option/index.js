import styled from "styled-components";

import { fontLayout } from "../../../constants/api";


const Container = styled.div`
  width: 37.9rem;
  height: 76.6rem;
  display: flex;
  flex-direction: column;
  grid-area: option;
  place-self: center left;

  border: 1px solid lightpink;
`;

const JobTypeFilter = styled.div`
  width: 100%;
  height: auto;
  padding-left: 1.2rem;

  label:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  label:last-child {
    margin-bottom: 3rem;
  }
`;

const JobTypeItemForm = styled.label`
  height: auto;
  display: grid;
  grid-template-columns: 1.8rem auto;
  gap: 1.2rem;

  ${ ({ theme }) => fontLayout('Poppins', '500', '1.4rem', '2.1rem', theme.palette.primary.dark) }

  border: 1px solid lightblue;

  input[type="checkbox"] {
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    display: grid;
    place-content: center;
    border: .1rem solid ${ ({ theme }) => theme.palette.grey };
    border-radius: .2rem;
    margin: 0;

    &::before {
      content: "";
      width: 0.75em;
      height: 0.75em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #663399;
      background-color: ${ ({ theme }) => theme.palette.white };
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
    &:checked {
      background-color: ${ ({ theme }) => theme.palette.primary.main };
      border: 0;
      &::before {
        transform: scale(1);
      }
    }
  }
`;

const JobTypeItem = ({ Checked }) => {
  return (
    <JobTypeItemForm>
      <input type="checkbox" checked={ Checked } />
      Full time
    </JobTypeItemForm>
  )
}

const LocationFilter = styled.div`
  width: 100%;
  height: auto;
  padding-left: 1.2rem;

  label:nth-child(1) {
    margin-top: 2.45rem;
  }
  label:not(:nth-child(1)) {
    margin-top: 1.5rem;
  }
`;

const LocationItemForm = styled.label`
  height: auto;
  display: grid;
  grid-template-columns: 1.8rem auto;
  gap: 1.2rem;

  ${ ({ theme }) => fontLayout('Poppins', '500', '1.4rem', '2.1rem', theme.palette.primary.dark) }

  border: 1px solid lightblue;

  input[type="radio"] {
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    display: grid;
    place-content: center;
    border: .1rem solid ${ ({ theme }) => theme.palette.grey };
    border-radius: 50%;
    margin: 0;

    &::before {
      content: "";
      width: 1em;
      height: 1em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #663399;
      background-color: ${ ({ theme }) => theme.palette.primary.main };
      transform-origin: center;
      clip-path: circle(45% at 50% 50%);
    }
    &:checked {
      background-color: ${ ({ theme }) => theme.palette.white };
      border-color: ${ ({ theme }) => theme.palette.primary.main };
      &::before {
        transform: scale(1);
      }
    }
  }
`;

const SearchFilterBox = styled.div`
  width: 100%;
  height: 8.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    ${ ({ theme }) => fontLayout('Poppins', 'bold', '1.4rem', '2.1rem', theme.palette.grey) }
  }

  div {
    position: relative;
    width: 100%;
    height: 4.8rem;

    input[type='text'] {
      width: 100%;
      height: 100%;
      background: ${ ({ theme }) => theme.palette.white };
      box-shadow: 0 .2rem .4rem rgba(0, 0, 0, 0.05);
      border-radius: .4rem;
      border: 0;
      padding-left: 4.5rem;
      outline: 0;
  
      &::placeholder {
        ${ ({ theme }) => fontLayout('Roboto', 'normal', '1.2rem', '1.4rem', theme.palette.grey) }
      }
    }
  }
`;

const LocationItem = ({ Checked }) => {
  return (
    <LocationItemForm>
      <input type="radio" checked={ Checked } name="radio" />
      London
    </LocationItemForm>
  )
}

const PublicIcon = styled.span.attrs( () => ({
  className: 'material-icons-outlined'
}))`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.4rem;
  font-size: 1.5rem;
  color: ${ ({ theme }) => theme.palette.grey };
`;

const Option = () => {
  return (
    <Container>
      <JobTypeFilter>
        <JobTypeItem />
        <JobTypeItem Checked />
      </JobTypeFilter>
      <SearchFilterBox>
        <label>LOCATION</label>
        <div>
          <PublicIcon children="public" />
          <input
            type="text"
            placeholder="City, state, zip code or country"
          />
        </div>
      </SearchFilterBox>
      <LocationFilter>
        <LocationItem />
        <LocationItem Checked />
      </LocationFilter>
    </Container>
  )
}

export default Option;