import styled from "styled-components";
import { Link } from "react-router-dom";
import { Pagination, Stack } from '@mui/material';

import { fontLayout } from "../../../constants/api";
import { BackGround } from "../../../assets";


const Container = styled.div`
  width: 79rem;
  height: 76.6rem;
  display: grid;
  grid-area: content;
  grid-template-rows: repeat(5, 11.4rem) auto;
  grid-row-gap: 3.2rem;
  place-self: center right;

  border: 1px solid lightskyblue;
`;

const JobItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${ ({ theme }) => theme.palette.white };
  box-shadow: 0 .2rem .4rem rgba(0, 0, 0, 0.05);
  border-radius: .4rem;
  margin-right: 1.6rem;
  padding: 1.2rem;
`;

const RecruiterIcon = styled.img`
  width: 9rem;
  height: 9rem;
  object-fit: cover;
`;

const JobContentBox = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;

const RecruiterName = styled.label`
  ${ ({ theme }) => fontLayout('Roboto', 'bold', '1.2rem', '1.4rem', theme.palette.primary.dark) }
`;

const JobOffer = styled.div`
  margin: .8rem 0 1.2rem 0;

  ${ ({ theme }) => fontLayout('Roboto', 'normal', '1.8rem', '2.1rem', theme.palette.primary.dark) }
`;

const JobPostInfoBox = styled.div`
  width: auto;
  height: 3.2rem;
  display: grid;
  grid-template-areas: "btn place time";
  grid-template-columns: 4fr 1fr 1fr;
`;

const JobPostTag = styled.button`
  width: 6.3rem;
  height: 2.6rem;
  display: grid;
  grid-area: btn;
  place-self: start left;
  border: .1rem solid ${ ({ theme }) => theme.palette.primary.dark };
  border-radius: .4rem;
  background-color: ${ ({ theme }) => theme.palette.white };
  cursor: pointer;

  ${ ({ theme }) => fontLayout('Roboto', 'bold', '1.2rem', '2.1rem', theme.palette.primary.dark) }
`;

const PlaceInfo = styled.div`
  grid-area: place;
  place-self: end right;
  display: grid;
  grid-template-columns: 1.5rem auto;
  grid-column-gap: .75rem;
  place-items: center;

  label {
    ${ ({ theme }) => fontLayout('Roboto', '500', '1.2rem', '1.4rem', theme.palette.grey) }
  }
  .material-icons-outlined {
    font-size: 1.5rem;
    color: ${ ({ theme }) => theme.palette.grey };
  }
`;

const TimeInfo = styled.div`
  grid-area: time;
  place-self: end right;
  display: grid;
  grid-template-columns: 1.5rem auto;
  grid-column-gap: .75rem;
  place-items: center;

  label {
    ${ ({ theme }) => fontLayout('Roboto', '500', '1.2rem', '1.4rem', theme.palette.grey) }
  }
  .material-icons-outlined {
    font-size: 1.5rem;
    color: ${ ({ theme }) => theme.palette.grey };
  }
`;

const JobItem = () => {
  return (
    <JobItemBox>
      <RecruiterIcon src={ BackGround } alt="" />
      <JobContentBox>
        <RecruiterName>Kasisto</RecruiterName>
        <JobOffer>Front-End Software Engineer</JobOffer>
        <JobPostInfoBox>
          <JobPostTag>Full time</JobPostTag>
          <PlaceInfo>
            <span className="material-icons-outlined">public</span>
            <label>New York</label>
          </PlaceInfo>
          <TimeInfo>
            <span className="material-icons-outlined">schedule</span>
            <label>5 days ago</label>
          </TimeInfo>
        </JobPostInfoBox>
      </JobContentBox>
    </JobItemBox>
  )
}

const Content = props => {
  return (
    <Container>
      <Link to="/content" style={{ textDecoration: 'none' }}>
        <JobItem />
      </Link>
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItemBox />
      <Stack spacing={2} sx={{ placeSelf: 'center right' }}>
        <Pagination
          count={10}
          siblingCount={1}
          boundaryCount={1}
          color="primary"
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: 'grey',
              borderColor: 'grey',
              "&:hover": {
                color: 'primary.main',
                borderColor: 'primary.main',
                backgroundColor: 'transparent'
              },
              "&.Mui-selected": {
                color: 'white',
                backgroundColor: 'primary.main',
                border: 0
              }
            },
          }}
        />
      </Stack>
    </Container>
  )
}

export default Content;