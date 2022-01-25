import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import useDataApi from "../../hooks/useDataAPI";



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

  .main--quote {
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
  }

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

const Main = props => {
  const {
    data, isLoading, error,
    // fetchData,
  } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container>
      {
        error ? error.message :
        isLoading ? "Loading ..." :
        !isEmpty(data) &&
        data.data.map( (item, index) => (
          <QuoteContainer key={index}>
            <div className="main--quote">
              "{ item.quoteText }"
            </div>
            <div className="main--author-genre">
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
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  )
}

export default Main;