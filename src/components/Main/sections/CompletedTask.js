import ContentContainer from "../containers/ContentContainer";
import EmptyContent from "../parts/EmptyContent";
import TaskContainer from "../containers/TaskContainer";
import TodoItem from "../parts/TodoItem";
import { Button } from "../../../stories/mine/Button";
// import { deleteDoneList } from "../../../utils/localStorage";


export default function CompletedTask( props ) {
  const {
    contentId, selectedIdx,
    doneList, deleteDone,
    deleteDoneList,
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
            DeleteIcon="delete"
            DoneList={ doneList }
            DeleteDone={ deleteDone }
          />
        ))
      }
      {
        !doneList.isEmpty() &&
        <Button
          color="danger"
          startIcon="delete"
          size="lg"
          label="Delete All"
          onClick={ () => { deleteDoneList(); window.location.reload(); return false; } }
        />
      }
      </TaskContainer>
    </ContentContainer>
  )
}