import styled from "styled-components";


const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding: .5rem 0;
  padding-right: .5rem;
  transition: opacity .4s ease;
  opacity: ${({ contentId, selectedIdx }) => (contentId === selectedIdx ? 1 : 0)};

  /* background-color: lightsalmon; */

  &::-webkit-scrollbar {
    width: 0.2rem;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #BDBDBD;
  }
`;

export default TaskContainer;