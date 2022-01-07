import styled from "styled-components";
import { STAYS } from "../constants/common";


const Container = styled.div`
  width: 100%;
  height: 847px;
  padding-left: 91px;
  padding-right: 99px;
  
  filter: ${ ({ IsPopUp }) => IsPopUp ? "blur(10px)" : "none" };
  z-index: ${ ({ IsPopUp }) => IsPopUp ? -1 : 0 };
  transition: all ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" } ease;
  transition-delay: ${ ({ IsPopUp }) => IsPopUp ? "0s" : ".5s" };
  background-color: cyan;
`;

const MainThreadStyled = styled.div`
  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: lightgrey;
  
  p:nth-child(1) {
    /* Font layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
  }
  p:nth-child(2) {
    /* Font layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
  }
`;

const MainThread = () => {
  return (
    <MainThreadStyled>
      <p>Stays in Finland</p> 
      <p>12+ stays</p>
    </MainThreadStyled>
  )
}

const PropertyList = styled.div`
  /* Layout */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 8px 0 78px 0;
`;

const PropertyContainer = styled.div`
  /* Layout */
  width: 395px;
  height: 345px;
  cursor: pointer;
`;

const PropertyImage = styled.div`
  /* Layout */
  width: 395px;
  height: 270px;
  background: url(${ ({ imgSrc }) => imgSrc });
  background-size: cover;
  border-radius: 24px;
`;

const PropertyInfoContainer = styled.div`
  /* Layout */
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: pink;
`;

const PropertyQualityTypeRatingContainer = styled.div`
  /* Layout */
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;

  background-color: lightgreen;
`;

const PropertyQuality = styled.span`
  /* Layout */
  width: 100px;
  height: 28px;
  border: 1px solid #4F4F4F;
  border-radius: 12px;
  margin-right: 11px;

  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #4F4F4F;
`;

const PropertyTypeRatingContainer = styled.div`
  /* Layout */
  width: ${ ({ isSuperHost }) => isSuperHost ? "70%" : "100%" };
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: lightpink;
`;

const PropertyType = styled.span`
  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #828282;
`;

const PropertyRating = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  
  span:nth-child(1) {
    padding-right: 7.12px;
    font-size: 16px;
    color: #EB5757;
  }

  span:nth-child(2) {
    /* Font layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #4F4F4F;
  }
`;

const PropertyDesc = styled.span`
  /* Layout */
  width: 100%;
  height: 20px;

  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* text-align: right; */
  color: #333333;

  background-color: lightsalmon;
`;

const Property = ({ className, property }) => {
  const isSuperHost = property.superHost;

  return (
    <PropertyContainer>
      <PropertyImage imgSrc={ property.photo } />
      <PropertyInfoContainer>
        <PropertyQualityTypeRatingContainer>
          { isSuperHost && <PropertyQuality children="SUPER HOST" /> }
          <PropertyTypeRatingContainer isSuperHost={ isSuperHost }>
            <PropertyType children={ property.type } />
            <PropertyRating>
              <span className="material-icons-outlined">star</span>
              <span>{ property.rating }</span>
            </PropertyRating>
          </PropertyTypeRatingContainer>
        </PropertyQualityTypeRatingContainer>
        <PropertyDesc children={ property.title } />
      </PropertyInfoContainer>
    </PropertyContainer>
  )
}

const Main = props => {
  const { isPopUp } = props;

  return (
    <Container IsPopUp={ isPopUp }>
      <MainThread />
      <PropertyList>
        {
          STAYS.map( ( item, index ) =>
            ( index < 6 ) && <Property key={ index } property={ item } />
          )
        }
      </PropertyList>
    </Container>
  )
}

export default Main;