import ContentContainer from "../containers/ContentContainer";
import EmptyContent from "../parts/EmptyContent";
import TaskContainer from "../containers/TaskContainer";
import TodoItem from "../parts/TodoItem";


export default function CompletedTask( props ) {
  const {
    contentId, selectedIdx,
    doneList,
  } = props;

  return (
    <ContentContainer ContentId={ contentId } SelectedIdx={ selectedIdx }>
      <TaskContainer ContentId={ contentId } SelectedIdx={ selectedIdx }>
      {
        doneList.isEmpty() &&
        <EmptyContent> . . . nothing finished yet . . . </EmptyContent>
      }
      {
        !doneList.isEmpty() && 
        doneList.map( doneItem => (
          <TodoItem 
            key={ `Done${doneItem.get('id')}` }
            ItemID={ doneItem.get('id') }
            Content={ doneItem.get('task') }
            Checked
            Disabled
          />
        ))
      }
      </TaskContainer>
    </ContentContainer>
  )
}