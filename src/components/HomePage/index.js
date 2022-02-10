import styled from "styled-components";

import Search from "./Search";
import Option from "./Option";
import Content from "./Content";
import Footer from "../Footer";

const Container = styled.div`
  grid-area: page;
  display: grid;
  grid-template-areas:
    "search search"
    "option content"
    "footer footer";
  grid-template-rows: 13.8rem 85rem auto;
`;

const HomePage = props => {
  return (
    <Container>
      <Search />
      <Option />
      <Content />
      <Footer />
    </Container>
  )
}

export default HomePage;