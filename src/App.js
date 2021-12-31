import styled from "styled-components";
import { Input } from "./stories/mine/Input"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 1440px;
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
  min-height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const Row = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
`;

const InputContainer = styled.div`
  width: ${ ({ inputContainerWidth }) => inputContainerWidth };
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputDesc = styled.span`
  /* Font layout */
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #333333;
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
          <Category children="Typography" fontColor="#9E9E9E" />
          <Category children="Grid" fontColor="#9E9E9E" />
          <Category children="Buttons" fontColor="#9E9E9E" />
          <Category children="Inputs" fontColor="#090F31" />
        </CategoryContainer>
      </LeftContainer>
      <RightContainer>
        <Title children="Inputs" />
        <RowContainer>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children="<Input />" />
              <Input />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input error />' />
              <Input error />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input disabled />' />
              <Input disabled />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input helperText="Some interesting text" />' />
              <Input helperText="Some interesting text" />
            </InputContainer>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input helperText="Some interesting text" error />' />
              <Input helperText="Some interesting text" error />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input startIcon />' />
              <Input startIcon="call" />
            </InputContainer>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input endIcon />' />
              <Input endIcon="lock" />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Button size="sm" />' />
              <Input size="sm" />
            </InputContainer>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Button size="md" />' />
              <Input size="md" />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="800px">
              <InputDesc children='<Input fullWidth />' />
              <Input fullWidth />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer inputContainerWidth="336px">
              <InputDesc children='<Input multiline row="4" />' />
              <Input multiline rows={ 4 } />
            </InputContainer>
          </Row>
        </RowContainer>
        <CreatedBy>created by <b><u>gutiepong</u></b> - devChallenges.io</CreatedBy>
      </RightContainer>
    </Container>
  );
}

export default App;
