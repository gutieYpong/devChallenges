import styled from "styled-components";
import { Button } from "./stories/mine/Button"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 1160px;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 18.75vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 47px 56.5px;
  background-color: #FAFBFD;
`;

const RightContainer = styled.div`
  width: 81.25vw;
  height: 100%;
  padding-left: 90.5px;
  padding-top: 53px;
  padding-bottom: 24px;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 122px;
`;

const Logo = styled.span`
  /* Layout */
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    var(--angle),
    var(--color-logo) 23%,
    transparent 23%,
    transparent 24%,
    var(--color-black) 24%
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;

  /* Font layout */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.span`
  /* Layout */
  width: 100%;
  height: 20px;
  
  /* Font layout */
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${ ({ fontColor }) => fontColor };
`;

const Title = styled.span`
  /* Layout */
  width: 93px;
  height: 36px;
  display: block;
  margin-bottom: 28px;

  /* Font layout */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #4F4F4F;
`;

const RowContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 907px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const Row = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

const BtnContainer = styled.div`
  width: ${ ({ btnContainerWidth }) => btnContainerWidth };
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnDesc = styled.span`
  /* Font layout */
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #333333;
`;

const IconUrl = styled.p`
  /* Layout */
  margin-bottom: 34px;

  /* Font layout */
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
`;

const CreatedBy = styled.p`
  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #A9A9A9;
`;


const App = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <Logo children="Devchallenges.io" />
        </LogoContainer>
        <CategoryContainer>
          <Category children="Colors" fontColor="#9E9E9E" />
          <Category children="Typography" fontColor="#9E9E9E" />
          <Category children="Spaces" fontColor="#9E9E9E" />
          <Category children="Buttons" fontColor="#9E9E9E" />
          <Category children="Inputs" fontColor="#090F31" />
          <Category children="Grid" fontColor="#9E9E9E" />
        </CategoryContainer>
      </LeftContainer>
      <RightContainer>
        <Title children="Buttons" />
        <RowContainer>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children="<Button />" />
              <Button />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button variant="outline" />' />
              <Button variant="outline" />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button variant="text" />' />
              <Button variant="text" />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button disableShadow />' />
              <Button disableShadow color="primary" />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button disabled />' />
              <Button disabled />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button variant="text" disabled />' />
              <Button variant="text" disabled />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button startIcon="local_grocery_store" />' />
              <Button startIcon="local_grocery_store" color="primary" />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button endIcon="local_grocery_store" />' />
              <Button endIcon="local_grocery_store" color="primary" />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button size="sm" />' />
              <Button size="sm" color="primary" />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button size="md" />' />
              <Button size="md" color="primary" />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button size="lg" />' />
              <Button size="lg" color="primary" />
            </BtnContainer>
          </Row>
          <Row>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button color="default" />' />
              <Button color="default" />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button color="primary" />' />
              <Button color="primary" />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button color="secondary" />' />
              <Button color="secondary" />
            </BtnContainer>
            <BtnContainer btnContainerWidth="236px">
              <BtnDesc children='<Button color="danger" />' />
              <Button color="danger" />
            </BtnContainer>
          </Row>
        </RowContainer>
        <IconUrl children={ `Icons: https://material.io/resources/icons/?style=round` } />
        <CreatedBy>created by <b><u>gutiepong</u></b> - devChallenges.io</CreatedBy>
      </RightContainer>
    </Container>
  );
}

export default App;
