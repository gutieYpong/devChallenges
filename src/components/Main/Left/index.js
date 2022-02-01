import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { Search } from "./Search";
import { Locator } from "./Locator";
import { fetchData } from '../../../features/weatherSlice';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import CloudBackGroundImg from "../../../assets/Cloud-background.png"
import { WEATHER_TYPE } from '../../../constants/common';
// import ShowerSVG from '../../assets/Shower.svg';


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 8.02% 38.81% 19.75% 21.11% auto;
  justify-items: center;
  background-color: #1e213a;
`;

const SearchLocatorContainer = styled.div`
  width: 79.76%;
  height: auto;
  max-height: 8.2rem;
  align-self: end;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  /* background-color: lightsalmon; */
`;

const WeatherIcon = styled.div`
  /* aspect-ratio: 1 / 0.7104; */
  width: 100%;
  height: 36rem;
  max-height: 39.7rem;
  align-self: end;
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
    max-width: 20.2rem;
    max-height: 23.4rem;
  }
`;

const TemperatureBox = styled.div`
  width: 19.2rem;
  height: 16.9rem;
  max-height: 20.2rem;
  align-self: end;

  font-weight: 500;
  font-size: 14.4rem;
  text-align: center;
  line-height: 16.9rem;
  color: #E7E7EB;

  span:nth-child(2) {
    font-size: 4.8rem;
    line-height: 5.635rem;
    color: #A09FB1;
  }
`;

const Temperature = ({ IsFahrenheit, TheTemp, HandleCtoF }) => {
  return (
    <TemperatureBox>
    {
      IsFahrenheit ? 
      <>
        <span>{ HandleCtoF(TheTemp).toFixed() }</span>
        <span>°F</span>
      </> :
      <>
        <span>{ TheTemp.toFixed() }</span>
        <span>°C</span>
      </>
    }
    </TemperatureBox>
  )
}

const Status = styled.div`
  width: 100%;
  height: auto;
  max-height: 21.6rem;
  align-self: center;

  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.2rem;
  text-align: center;
  color: #A09FB1;
`;

const DataLocationArea = styled.div`
  width: 100%;
  height: auto;
  max-height: 7.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  width: auto;
  height: 2.1rem;
  display: flex;
  justify-content: space-between;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #88869D;

  .material-icons {
    margin-right: .9rem;
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

const PopUpLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: ${ ({ IsPopUp }) => IsPopUp ? 0 : "-100%" };
  display: grid;
  grid-template-rows: 16.03% auto;
  background: #1E213A;
  padding: 2.4rem 0;
  visibility: ${ ({ IsPopUp }) => IsPopUp ? "visible" : "hidden" };
  opacity: ${ ({ IsPopUp }) => IsPopUp ? 1 : 0 };
  transition: all .5s ease;
  z-index: 2;
`;

const PopUpSearchArea = styled.div`
  width: 79.74%; // 366px
  height: 4.8rem;
  place-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: lightpink; */
`;

const PopUpCloseBtn = styled.span`
  position: absolute;
  top: 1.921rem;
  right: 5.321rem;
  cursor: pointer;

  font-size: 1.8rem;
  color: #E7E7EB;
`;

const PopUpSearchInput = styled.div`
  position: relative;
  width: 73.22%;
  height: 100%;

  /* background-color: lightpink; */

  input[type=text] {
    width: 100%;
    height: 100%;
    outline: 0;
    border: 1px solid #E7E7EB;
    background-color: transparent;
    padding: 0 3.195rem 0 4.895rem;

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #E7E7EB;

    &::placeholder {
      color: #616475;
    }
  }
  .material-icons-outlined {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.7rem;
    color: #616475;
  }
`;

const PopUpSearchBtn = styled.button`
  width: 23.5%;
  height: 100%;
  border: 0;
  background: #3C47E9;
  cursor: pointer;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #E7E7EB;
`;

const PopUpSearchResult = styled.div`
  width: 79.74%;
  justify-self: center;

  background-color: lightsalmon;
`;

export default function Left( props ) {
  const {
    todayTempInfo, status, userLocation,
    isFahrenheit,
    handleDateFormat, handleCtoF,
  } = props;
  const [isPopUp, setIsPopUp] = useState(false);
  const ref = useRef();

  useOnClickOutside( ref, () => setIsPopUp( false ) );

  return (
    <Container ref={ ref }>
      <PopUpLeft
        IsPopUp={ isPopUp }
      >
        <PopUpSearchArea>
          <PopUpCloseBtn
            className="material-icons-outlined"
            children="close"
            onClick={ () => setIsPopUp( false ) }
          />
          <PopUpSearchInput>
            <input
              type="text"
              placeholder="search location"
            />
            <span className="material-icons-outlined">search</span>
          </PopUpSearchInput>
          
          <PopUpSearchBtn
            children="Search"
          />
        </PopUpSearchArea>
        <PopUpSearchResult></PopUpSearchResult>
      </PopUpLeft>
      {
        ( status === 'loading' ) ?
        "loading" :
        <>
        <SearchLocatorContainer>
          <Search
            children="Seach for places"
            onClick={ () => setIsPopUp( true ) }
          />
          <Locator children="gps_fixed" />
        </SearchLocatorContainer>
        <WeatherIcon ImgSrc={ CloudBackGroundImg }>
          <img src={ WEATHER_TYPE[todayTempInfo.weather_state_abbr] } alt="" />
        </WeatherIcon>
        <Temperature
          IsFahrenheit={ isFahrenheit }
          TheTemp={ todayTempInfo.the_temp }
          HandleCtoF={ handleCtoF }
        />
        <Status children={ todayTempInfo.weather_state_name } />
        <DataLocationArea>
          <Date TodayDate={ handleDateFormat( todayTempInfo.applicable_date ) } />
          <Location UserLocation={ userLocation } />
        </DataLocationArea>
        </>
      }
    </Container>
  );
}
