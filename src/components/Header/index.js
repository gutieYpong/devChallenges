import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 104px;
  display: grid;
  grid-column: 4 / 10;
  /* grid-row: 1 / 2; */
  place-items: center;

  /* background-color: pink; */
`;

const Title = styled.p`
  /* Layout */
  width: 118px;
  height: 41px;

  /* Font Layout */
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 41px;
  text-align: center;
  letter-spacing: -0.045em;
  color: #333333;
`;

const Header = () => {
  return (
    <Container>
      <Title children="#todo"  />
    </Container>
  )
}

export default Header;