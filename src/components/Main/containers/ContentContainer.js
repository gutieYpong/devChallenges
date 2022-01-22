import styled from "styled-components";


const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity .4s ease;
  opacity: ${ ({ ContentId, SelectedIdx }) => ( ContentId === SelectedIdx ? 1 : 0 ) };
`;

export default ContentContainer;
