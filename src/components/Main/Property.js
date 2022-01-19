import { forwardRef } from "react";
import styled from "styled-components";


const PropertyContainer = styled.div`
  /* Layout */
  width: auto;
  height: auto;
  cursor: pointer;
`;

const PropertyImage = styled.div`
  /* Layout */
  aspect-ratio: 1.3 / 1;
  width: 100%;
  min-width: 256px;
  height: auto;
  min-height: 200px;
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

  /* background-color: pink; */
`;

const PropertyQualityTypeRatingContainer = styled.div`
  /* Layout */
  width: 100%;
  height: 67%;
  max-height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px 0 2px;
  margin-top: 12px;

  /* background-color: lightgreen; */
`;

const PropertyQuality = styled.span`
  /* Layout */
  width: 100px;
  max-width: 100px;
  height: 100%;
  border: 1px solid #4F4F4F;
  border-radius: 12px;
  margin-right: 8px;

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

  /* background-color: lightpink; */
`;

const PropertyType = styled.span`
  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: .8rem;
  line-height: 28px;
  color: #828282;
`;

const PropertyRating = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  
  span:nth-child(1) {
    padding-right: 6px;
    font-size: .8rem;
    color: #EB5757;
  }

  span:nth-child(2) {
    /* Font layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: .8rem;
    color: #4F4F4F;
  }
`;

const PropertyDesc = styled.span`
  /* Layout */
  width: 100%;
  height: 33%;
  max-height: 20px;

  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: .8rem; // 16px
  line-height: 20px;
  color: #333333;

  /* background-color: lightsalmon; */
`;

const Property = forwardRef( ({ className, property }, ref ) => {
  const isSuperHost = property.superHost;

  return (
    <PropertyContainer ref={ ref && ref } className={ className } >
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
})

export default Property;