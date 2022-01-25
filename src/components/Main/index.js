import { useState } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { RandomBtn } from "../Header";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column: 4 / 10;
  padding-bottom: 100px;

  /* background-color: lightskyblue; */
`;

const QuoteContainer = styled.div`
  /* Layout */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  /* Font Layout */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  color: #000000;

  .main--author-genre {
    width: 100%;
    max-width: 672px;
    height: 151px;
    display: grid;
    grid-template-areas:
      "author arrow"
      "genre arrow";
    grid-row-gap: 8px;
    padding: 30px;
    background-color: #FFFFFF;
    cursor: pointer;

    .main--author {
      display: grid;
      grid-area: author;
      align-self: flex-end;

      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #4F4F4F;
    }
    .main--genre {
      display: grid;
      grid-area: genre;

      font-size: 14px;
      line-height: 16px;
      color: #828282;
    }
    .main--arrow {
      display: none;
      grid-area: arrow;
      place-self: center right;
      color: #FFFFFF;
    }

    &:hover {
      background-color: #333333;

      .main--author {
        color: #F2F2F2; 
      }
      .main--arrow {
        display: block;
      }
    }
  }
`;

const QuoteItem = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px;

  /* background-color: lightsalmon; */

  &::before {
    position: absolute;
    content: "";
    width: 8px;
    height: 100%;
    background-color: #F7DF94;
    top: 0;
    left: -70px;
  }
`;

const PopUpQuoteItem = styled( QuoteItem )`
  width: 65%;
  padding: 0;

  /* Font Layout */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  color: #000000;

  /* background-color: lightpink; */
`;

const StyledMUIBox = styled( Box )`
  position: absolute;
  width: 80%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-rows: 15vh;
  grid-auto-rows: auto;
  grid-row-gap: 3rem;
  place-items: center;

  padding: 4rem;
  outline: 0;
  overflow-y: scroll;

  background-color: #FFFFFF;
`;

const Label = styled.label`
  width: 65%;
  align-self: flex-start;

  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  color: #333333;

  /* background-color: lightsalmon; */
`;

const Main = props => {
  const {
    data, author, quotesFromOneAuthor, isLoading, error, fetchData
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {
        error ? error.message :
        isLoading ? "Loading ..." :
        !isEmpty(data) &&
        data.data.map( (item, index) => (
          <QuoteContainer key={index}>
            <QuoteItem children={ `"${ item.quoteText }"` } />
            <div className="main--author-genre" onClick={ () => setOpen( true ) }>
              <span className="main--author">{ item.quoteAuthor }</span>
              <span className="main--genre">{ item.quoteGenre }</span>
              <span
                className="material-icons-outlined main--arrow"
                children="arrow_right_alt"
              />
            </div>
          </QuoteContainer>
        ))
      }
      <Modal
        open={open}
        onClose={ () => setOpen( false ) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledMUIBox>
          {
            isLoading ? "..." :
            <Label children={ author } />
          }
          <RandomBtn
            style={{ position: "absolute", right: "5%", top: "5%" }}
            onClick={ () => fetchData("quotes/random") }>
            <label>random</label>
            <span
              className="material-icons-outlined"
              children="autorenew"
            />
          </RandomBtn>
          {
            error ? error.message :
            isLoading ? "Loading ..." :
            !isEmpty(quotesFromOneAuthor) &&
            quotesFromOneAuthor.data.map( (item, index) => (
              <PopUpQuoteItem
                key={index}
                children={ `"${ item.quoteText }"` }
              />
            ))
          }
        </StyledMUIBox>
      </Modal>
    </Container>
  )
}

export default Main;