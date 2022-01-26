import { useState } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column: 4 / 10;

  background-color: lightskyblue;
`;


const Main = props => {
  const {
  } = props;

  return (
    <Container>
      Main
    </Container>
  )
}

export default Main;