import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import * as dayjs from "dayjs";

import Left from './Left';
import Right from './Right';
import { weatherInfo } from '../../features/weatherSlice';
import { size } from '../../constants/breakpoints'


const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 144rem;
  max-height: 102.3rem;
  display: grid;
  grid-template-columns: 31.875% 68.125%;
  place-items: center;

  @media screen and ( max-width: ${ size.tablet } ) {
    grid-template-columns: none;
    height: auto;
    max-height: 100%;
  }

  @media screen and (orientation: landscape) and ( max-width: ${ size.tablet } ) {
    grid-template-columns: none;
    height: auto;
    max-height: 100%;
  }
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
