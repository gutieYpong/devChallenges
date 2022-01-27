import { useState } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";
import { ReactComponent as AdventurerSVG } from "../../assets/adventurer.svg"


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  /* background-color: lightskyblue; */
`;

const Board = styled.div`
  position: relative;
  width: 46.4rem;
  height: 51.5rem;
  aspect-ratio: 464 / 515;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2.4rem;
  background-color: #FFFFFF;
  padding: 6.8rem 3.2rem;

  &::before {
    position: absolute;
    content: "COUNTRY QUIZ";
    top: -6.4rem;
    left: 0;

    /* Font Layout */
    font-weight: bold;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #F2F2F2;
  }
`;

const StyledAdventurerSVG = styled( AdventurerSVG )`
  position: absolute;
  width: 16.2rem;
  height: 11.6rem;
  aspect-ratio: 162 / 116;
  top: -7.4rem;
  right: 0;
`;

const Question = styled.p`
  width: 100%;
  height: auto;
  margin: 0;

  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3.6rem;
  color: #2F527B;
`;

const Options = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  grid-row-gap: 2.5rem;
`;

const OptionItem = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 7.143 / 1;
  max-width: 40rem;
  max-height: 5.6rem;
  display: grid;
  grid-template-columns: auto 79.5%;
  place-items: center start;
  padding: 1rem 2rem;
  border: 0.2rem solid rgba(96, 102, 208, 0.7);
  border-radius: 1.2rem;
  color: rgba(96, 102, 208, 0.8);
  cursor: pointer;

  .option--indicator {
    font-weight: 500;
    font-size: 2.4rem;
  }
  .option--content {
    font-weight: 500;
    font-size: 1.8rem;
  }

  &:hover {
    border-color: #FFFFFF;
    background-color: #F9A826;
    color: #FFFFFF;
  }
`;


const Main = props => {
  const {
  } = props;

  return (
    <Container>
      <Board>
        <StyledAdventurerSVG />
        <Question>Kuala Lumpur is the capital of</Question>
        <Options>
          <OptionItem>
            <span className="option--indicator">A</span>
            <span className="option--content">Vietnam</span>
          </OptionItem>
          <OptionItem>
            <span className="option--indicator">B</span>
            <span className="option--content">Malaysia</span>
          </OptionItem>
          <OptionItem>
            <span className="option--indicator">C</span>
            <span className="option--content">Sweden</span>
          </OptionItem>
          <OptionItem>
            <span className="option--indicator">D</span>
            <span className="option--content">Austria</span>
          </OptionItem>
        </Options>
      </Board>
    </Container>
  )
}

export default Main;