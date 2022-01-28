import styled from "styled-components";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Skeleton from '@mui/material/Skeleton';

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

const StyledSkeleton = styled( Skeleton )`
  width: 100%;
  height: 100%;
`;


const Main = props => {
  const LIST_DECORATOR = ['A', 'B', 'C', 'D'];
  const {
    data, quest, isLoading, error,
    fetchData, generateQuest
  } = props;

  useEffect(() => {
    fetchData(data);
  }, []);

  return (
    <Container>
      <button onClick={ () => fetchData() }>fetch</button>
      <button onClick={ () => generateQuest(data) }>generate</button>
      <Board>
        <StyledAdventurerSVG />
        { isLoading ?
          <>
          <StyledSkeleton />
          <StyledSkeleton />
          </> :
          <>
          <Question>{ quest.question } is the capital of</Question>
          <Options>
            {
              quest.options.map(( option, index ) => (
                <OptionItem key={ index }>
                  <span className="option--indicator">{ LIST_DECORATOR[index] }</span>
                  <span className="option--content">{ option }</span>
                </OptionItem>
              ))
            }
          </Options>
          </>
        }
      </Board>
    </Container>
  )
}

export default Main;