import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';

import { ReactComponent as AdventurerSVG } from "../../assets/adventurer.svg"
import { ReactComponent as WinnersSVG } from "../../assets/winners.svg"

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
  height: 55.9rem; // 51.5rem
  aspect-ratio: 464 / 559;
  display: grid;
  grid-template-rows: 14.06% 69.91% 16.03%;
  border-radius: 2.4rem;
  background-color: #FFFFFF;
  padding: 6.8rem 3.2rem 3.2rem 3.2rem;

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

const ResultBoard = styled.div`
  position: relative;
  width: 46.4rem;
  height: 54.2rem;
  aspect-ratio: 464 / 542;
  display: grid;
  grid-template-rows: 27.95% 43.14% 28.91%;
  place-items: end center;
  border-radius: 2.4rem;
  background-color: #FFFFFF;
  padding: 4.902rem 3.2rem 3.2rem 3.3rem;

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

const OptionItem = styled.div( ({ ID, ShowAns, IsCorrect, SelectedId, IsAns }) => {
  let itemLayout = "";
  if( ShowAns )
  {
    itemLayout += `pointer-events: none;`;
    if( SelectedId === ID )
    {
      itemLayout += `
        color: #FFFFFF;
      `;
      itemLayout += IsCorrect ? `
        background-color: #60BF88;
        border-color: #60BF88;
      ` : `
        background-color: #EA8282;
        border-color: #EA8282;
      `;
    }
    else
    {
      itemLayout += !IsCorrect && IsAns ? `
        color: #FFFFFF;
        background-color: #60BF88;
        border-color: #60BF88;
      ` : `background-color: #FFFFFF;`;
    }
  }

return css`
    width: 100%;
    height: auto;
    aspect-ratio: 7.143 / 1;
    max-width: 40rem;
    max-height: 5.6rem;
    display: grid;
    grid-template-columns: auto 70% 9.5%;
    place-items: center start;
    padding: 1rem 2rem;
    border: 0.2rem solid rgba(96, 102, 208, 0.7);
    border-radius: 1.2rem;
    color: rgba(96, 102, 208, 0.8);
    cursor: pointer;

    ${ itemLayout }

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

    .material-icons-outlined {
      display: ${ ({ ID, SelectedId, IsAns }) => ((SelectedId === ID) || IsAns) ? "block" : "none" };
      justify-self: right;
      font-size: 2rem;
      color: #FFFFFF;
    }
`;})

const StyledSkeleton = styled( Skeleton )`
  width: 100%;
  height: 100%;
`;

const StyledWinnersSVG = styled( WinnersSVG )`
  width: 23.8rem;
  height: 12.858rem;
`;

const NextBtn = styled.button`
  width: 11.6rem;
  height: 5.6rem;
  place-self: end;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border: 0;
  border-radius: 1.2rem;
  background-color: #F9A826;
  cursor: pointer;

  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #FFFFFF;
`;

const ResultTitle = styled.span`
  font-weight: bold;
  font-size: 4.8rem;
  line-height: 7.2rem;
  color: #1D355D;
`;

const ResultOutcome = styled.span`
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #1D355D;

  span {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #6FCF97;
  }
`;

const TryAgainBtn = styled.button`
  width: 20.9rem;
  height: 6.2rem;
  border: 2px solid #1D355D;
  border-radius: 1.2rem;
  background-color: transparent;
  cursor: pointer;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #1D355D;
`;

const Main = props => {
  const LIST_DECORATOR = ['A', 'B', 'C', 'D'];
  const {
    data, quest, isLoading, error,
    fetchData, generateQuest
  } = props;
  const [showAns, setShowAns] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);
  const [score, setScore] = useState(0);

  const handleMatching = ( isAns, index ) => {
    if( isAns )
    {
      setScore( score => score + 1 );
      setIsCorrect( true );
    }
    else
    {
      setIsCorrect( false );
    }
    setShowAns( true ); 
    setSelectedId( index );
  }

  const handleNext = () => {
    if( !isCorrect )
    {
      setShowResult( true );
    }

    // init for next question
    setShowAns( false );
    setIsCorrect( false );
    setSelectedId( -1 );

    generateQuest(data);
  }

  useEffect(() => {
    localStorage.clear(); // clear localStorage when page reload.
    fetchData(data);
  }, []);

  return (
    <Container>
      {
        showResult ?
      <ResultBoard>
        <StyledWinnersSVG />
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
          <ResultTitle children="Results" />
          <ResultOutcome>You got <span>{ score }</span> correct answers</ResultOutcome>
        </div>
        <TryAgainBtn children="Try again" onClick={ () => window.location.reload() } />
      </ResultBoard>
      :
      <Board>
        <StyledAdventurerSVG />
        { 
          error ? error.message :
          isLoading ?
          <>
          <StyledSkeleton />
          <StyledSkeleton />
          </> :
          <>
          <Question>{ quest.question } is the capital of ...</Question>
          <Options>
            {
              quest.options.map(( item, index ) => (
                <OptionItem
                  key={ index }
                  className={ item.option.isAns && "ans" }
                  ID={ index }
                  IsAns={ showAns && item.option.isAns }
                  ShowAns={ showAns }
                  IsCorrect={ isCorrect }
                  SelectedId={ selectedId }
                  onClick={ () => handleMatching( item.option.isAns, index ) }
                >
                  <span className="option--indicator">{ LIST_DECORATOR[index] }</span>
                  <span className="option--content">{ item.option.value }</span>
                  { 
                    showAns && item.option.isAns ? 
                    <span className="material-icons-outlined">check_circle</span> :
                    <span className="material-icons-outlined">cancel</span>
                  }
                </OptionItem>
              ))
            }
          </Options>
          </>
        }
        { showAns && <NextBtn children="Next" onClick={ handleNext } /> }
      </Board>
      }
    </Container>
  )
}

export default Main;