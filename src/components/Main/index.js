import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import * as dayjs from "dayjs";
// import isoWeek from "dayjs/plugin/isoWeek";
// import customParseFormat from "dayjs/plugin/customParseFormat";

import Left from './Left';
import Right from './Right';
import { weatherInfo } from '../../features/weatherSlice';

// dayjs.extend( customParseFormat );
// dayjs.extend( isoWeek );


const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 144rem;
  max-height: 102.3rem;
  display: grid;
  grid-template-columns: 31.875% 68.125%;
  place-items: center;
`;

const Main = () => {
  const states = useSelector( weatherInfo );

  const handleDateFormat = ( date ) => {
    return dayjs( date ).format("ddd, D MMM");
  }

  return (
    <Container>
      <Left
        todayTempInfo={ states.data.consolidated_weather[0] }
        status={ states.status }
        userLocation={ states.data.title }
        handleDateFormat={ handleDateFormat }
      />
      <Right
        forcastInfo={ states.data.consolidated_weather }
        handleDateFormat={ handleDateFormat }
      />
    </Container>
  );
};

export default Main;
