import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 104px;
  display: grid;
  grid-column: 10 / 12;
  place-items: center right;

  /* background-color: pink; */
`;

const RandomBtn = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  cursor: pointer;

  /* background-color: lightseagreen; */

  label {
    margin-right: 7px;
    /* Font Layout */
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #4F4F4F;
    cursor: inherit;
  }

  .material-icons-outlined {
    color: #4F4F4F;
  }
`;

const Header = ({ fetchData }) => {
  return (
    <Container>
      <RandomBtn onClick={ () => fetchData("quotes/random") }>
        <label>random</label>
        <span
          className="material-icons-outlined"
          children="autorenew"
        />
      </RandomBtn>

    </Container>
  )
}

export default Header;