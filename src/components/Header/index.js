import styled from "styled-components";

import { fontLayout } from "../../constants/api";

const Container = styled.div`
  width: 120.1rem;
  height: 100%;
  display: grid;
  grid-area: header;
  place-items: center left;

  background-color: lightcoral;
`;

const Title = styled.div`
  ${ ({ theme }) => fontLayout('Poppins', 'bold', '2.4rem', '3.6rem', theme.palette.black) }
  
  span {
    font-weight: 300;
  }
`;

const Header = props => {
  return (
    <Container>
      <Title>Github <span>Jobs</span></Title>
    </Container>
  )
}

export default Header;