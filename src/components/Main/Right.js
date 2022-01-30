import styled, { css } from 'styled-components';
import { WEATHER_TYPE } from '../../constants/common';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "conversion"
    "weathercard"
    "weatherdetail"
    "footer";
  justify-items: center;
  /* padding: 4.2rem 12.3rem 2.5rem 15.4rem; */
  background-color: #100e1d;
`;

const TempConversion = styled.div`
  width: 71.76%;
  height: auto;
  grid-area: conversion;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: lightpink;
`;

const Celcius = styled.span`
  width: 4rem;
  height: 4rem;
  margin-right: 1.2rem;
  background: #E7E7EB;
  border-radius: 50%;
  cursor: pointer;

  font-weight: bold;
  font-size: 1.8rem;
  line-height: 4rem;
  text-align: center;
  color: #110E3C;
`;

const Fahrenheit = styled.span`
  width: 4rem;
  height: 4rem;
  background: #585676;
  border-radius: 50%;
  cursor: pointer;

  font-weight: bold;
  font-size: 1.8rem;
  line-height: 4rem;
  text-align: center;
  color: #E7E7EB;
`;

const WeatherCardArea = styled.div`
  width: 71.76%;
  height: auto;
  grid-area: weathercard;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: lightsalmon;
`;

const WeatherCard = styled.div`
  width: 12rem;
  height: 17.7rem;
  display: grid;
  grid-template-areas:
    "date date"
    "icon icon"
    "maxtemp mintemp";
  place-items: center;
  background: #1E213A;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #E7E7EB;
`;

const CardDate = styled.div`
  grid-area: date;
`;

const CardIcon = styled.img`
  width: 5.644rem;
  height: 6.2rem;
  grid-area: icon;
`;

const CardMaxTemp = styled.span`
  grid-area: maxtemp;
`;

const CardMinTemp = styled.span`
  grid-area: mintemp;
  color: #A09FB1;
`;

const WeatherDetailArea = styled.div`
  position: relative;
  width: 71.76%;
  height: auto;
  display: grid;
  grid-area: weatherdetail;
  grid-template-columns: repeat(2, 32.8rem);
  grid-column-gap: 4.8rem;
  grid-template-rows: 20.4rem 15.9rem;
  grid-row-gap: 4.8rem;

  background-color: lightcoral;

  &::before {
    position: absolute;
    content: "Today’s Hightlights";
    top: -6rem;
    left: 0;

    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #E7E7EB;
  }
`;

const InfoCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #1E213A;

  .info-card--title {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #E7E7EB;
  }
  .info-card--data {
    font-weight: bold;
    font-size: 6.4rem;
    line-height: 7.5rem;
    color: #E7E7EB;
  }
  .info-card--data-unit {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.226rem;
    color: #E7E7EB;
  }

  .wind-direction--area {
    width: 7.32rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 0.571rem;

    .wind-direction--icon {
      width: 2.949rem;
      height: 2.949rem;
      place-self: center right;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(-150deg);

      .material-icons {
        font-size: 1.253rem;
        color: #E7E7EB;
      }
    }
    .wind-direction--result {
      place-self: center left;

      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: #E7E7EB;
    }
  }

  .humidity-meter--area {
    position: relative;
    width: 100%;
    height: auto;
    display: grid;
    grid-row-gap: auto auto auto;
    place-items: center;

    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    color: #A09FB1;

    .humidity-meter--scale-area {
      width: 69.81%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .2rem;
    }
    .humidity-meter--bar {
      width: 69.81%;
      height: .8rem;
      background: #E7E7EB;
      border-radius: 8rem;
    }
    .humidity-meter--unit {
      width: 69.81%;
      margin-top: 0.4rem;
      text-align: right;
    }
  }
`;

export default function Right( props ) {
  const {
    forcastInfo,
    handleDateFormat,
  } = props;

  forcastInfo.map( item => console.log(`forcast: ${item} `));
  return (
    <Container>
      <TempConversion>
        <Celcius children="°C" />
        <Fahrenheit children="°F" />
      </TempConversion>
      <WeatherCardArea>
        { 
          forcastInfo.slice(1).map(( item, index ) => (
            <WeatherCard key={ index }>
              <CardDate>{ index ? handleDateFormat(item.applicable_date) : "Tomorrow" }</CardDate>
              <CardIcon src={ WEATHER_TYPE[item.weather_state_abbr] } alt={ item.weather_state_name } />
              <CardMaxTemp>{ parseInt(item.max_temp) }°C</CardMaxTemp>
              <CardMinTemp>{ parseInt(item.min_temp) }°C</CardMinTemp>
            </WeatherCard>
          ))
        }
      </WeatherCardArea>
      <WeatherDetailArea>
        <InfoCard>
          <span className="info-card--title">Wind Status</span>
          <span className="info-card--data">{ forcastInfo[0].wind_speed.toFixed(1) }
            <span className="info-card--data-unit">mph</span>
          </span>
          <div className="wind-direction--area">
            <div className="wind-direction--icon">
              <span className="material-icons">navigation</span>
            </div>
            <span className="wind-direction--result" children={ forcastInfo[0].wind_direction_compass } />
          </div>
        </InfoCard>
        <InfoCard>
          <span className="info-card--title">Humidity</span>
          <span className="info-card--data">{ forcastInfo[0].humidity }
            <span className="info-card--data-unit">%</span>
          </span>
          <div className="humidity-meter--area">
            <div className="humidity-meter--scale-area">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="humidity-meter--bar"></div>
            <span className="humidity-meter--unit">%</span>
          </div>
        </InfoCard>
        <InfoCard>
          <span className="info-card--title">Visibility</span>
          <span className="info-card--data">{ forcastInfo[0].visibility.toFixed(1) }
            <span className="info-card--data-unit"> miles</span>
          </span>
        </InfoCard>
        <InfoCard>
          <span className="info-card--title">Air Pressure</span>
          <span className="info-card--data">{ forcastInfo[0].air_pressure }
            <span className="info-card--data-unit"> mb</span>
          </span>
        </InfoCard>
      </WeatherDetailArea>

    </Container>
  )
}