import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { fetchData } from '../../features/weatherSlice';
import CloudBackGroundImg from "../../assets/Cloud-background.png"
import { WEATHER_TYPE } from '../../constants/common';
// import ShowerSVG from '../../assets/Shower.svg';


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  /* padding: 4.2rem 4.6rem 5.2rem 4.6rem; */
  background-color: #1e213a;
`;

const SearchLocatorContainer = styled.div`
  width: 79.76%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 4.2rem;

  /* background-color: lightsalmon; */
`;

const Seacrh = styled.button`
  width: 16.1rem;
  height: 4rem;
  background: #6e707a;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #e7e7eb;
`;

const Locator = styled.span.attrs((props) => ({
  className: 'material-icons-outlined'
}))`
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;

  font-size: 2.2rem;
  line-height: 4rem;
  text-align: center;
  color: #E7E7EB;
`;

const WeatherIcon = styled.div`
  width: 100%;
  height: 36rem;
  display: grid;
  place-items: center;
  background-color: inherit;
  background-image: url(${ ({ ImgSrc }) => ImgSrc });
  background-size: cover;
  background-blend-mode: overlay;
  background-position: 50% 30%;
  background-repeat: no-repeat;

  img {
    width: 20.2rem;
    height: 23.4rem;
  }
`;

const TemperatureBox = styled.div`
  width: 19.2rem;
  height: 16.9rem;

  font-weight: 500;
  font-size: 14.4rem;
  line-height: 16.9rem;
  color: #E7E7EB;

  span:nth-child(3) {
    font-size: 4.8rem;
    line-height: 5.635rem;
    color: #A09FB1;
  }
`;

const Temperature = props => {
  return (
    <TemperatureBox>
      <span>1</span>
      <span>5</span>
      <span>°C</span>
    </TemperatureBox>
  )
}

const Status = styled.span`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.2rem;
  text-align: center;
  color: #A09FB1;
`;

const DateBox = styled.div`
  width: 16.3rem;
  height: 2.1rem;
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #88869D;
`;

const Date = ({ TodayDate }) => (
  <DateBox>
    <span>Today</span>
    <span>•</span>
    <span>{ TodayDate }</span>
  </DateBox>
)

const LocationBox = styled.div`
  width: 9.1rem;
  height: 2.1rem;
  display: flex;
  justify-content: space-between;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #88869D;

  .material-icons {
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
`;

const Location = ({ UserLocation }) => (
  <LocationBox>
    <span className="material-icons">place</span>
    <span>{ UserLocation }</span>
  </LocationBox>
)


export default function Left( props ) {
  const {
    todayTempInfo, status, userLocation,
    handleDateFormat,
  } = props;

  console.log(todayTempInfo)

  return (
    <Container>
      {
        ( status === 'loading' ) ?
        "loading" :
        <>
        <SearchLocatorContainer>
          <Seacrh
            children="Seach for places"
          />
          <Locator children="gps_fixed" />
        </SearchLocatorContainer>
        <WeatherIcon ImgSrc={ CloudBackGroundImg }>
          <img src={ WEATHER_TYPE[todayTempInfo.weather_state_abbr] } alt="" />
        </WeatherIcon>
        <Temperature />
        <Status children={ todayTempInfo.weather_state_name } />
        <Date TodayDate={ handleDateFormat( todayTempInfo.applicable_date ) } />
        <Location UserLocation={ userLocation } />
        </>
      }
    </Container>
  );
}
