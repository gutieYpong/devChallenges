import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import * as dayjs from "dayjs";

import Left from './Left';
import Right from './Right';
import { weatherInfo } from '../../features/weatherSlice';


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
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const handleDateFormat = ( date ) => {
    return dayjs( date ).format("ddd, D MMM");
  }

  const handleCtoF = payload => {
    return payload * 9 / 5 + 32;
  }

  return (
    <Container>
      <Left
        todayTempInfo={ states.data.consolidated_weather[0] }
        status={ states.status }
        userLocation={ states.data.title }
        handleDateFormat={ handleDateFormat }
        handleCtoF={ handleCtoF }
        isFahrenheit={ isFahrenheit }
        setIsFahrenheit={ setIsFahrenheit }
      />
      <Right
        forcastInfo={ states.data.consolidated_weather }
        handleDateFormat={ handleDateFormat }
        handleCtoF= { handleCtoF }
        isFahrenheit={ isFahrenheit }
        setIsFahrenheit={ setIsFahrenheit }
      />
    </Container>
  );
};

export default Main;
