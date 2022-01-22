import styled from "styled-components";


const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: opacity .4s ease;
  opacity: ${({ contentId, selectedIdx }) => (contentId === selectedIdx ? 1 : 0)};
`;

export default TaskContainer;