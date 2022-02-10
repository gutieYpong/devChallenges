import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  align-self: flex-end;
  grid-area: footer;
`;

const CreatedBy = styled.p`
  /* Layout */
  width: 100%;

  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align: center;
  color: #B9BDCF;
`;

const Footer = () => {
  return (
    <Container>
      <CreatedBy>created by <b><u>gutieYpong</u></b> - devChallenges.io</CreatedBy>
    </Container>
  )
}

export default Footer;