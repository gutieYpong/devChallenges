import styled from "styled-components";


const PropertyContainer = styled.div`
  /* Layout */
  flex-basis: 30%;
  width: auto;
  height: auto;
  min-width: 345px;
  cursor: pointer;
`;

const PropertyImage = styled.div`
  /* Layout */
  width: 100%;
  height: auto;
  min-height: 270px;
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
            <PropertyType children={ property.type + ' ' + property.city } />
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

export default Property;