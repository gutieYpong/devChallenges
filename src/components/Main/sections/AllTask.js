import ContentContainer from "../containers/ContentContainer";
import TaskFunc from "../parts/TaskFunc";
import EmptyContent from "../parts/EmptyContent";
import TaskContainer from "../containers/TaskContainer";
import TodoItem from "../parts/TodoItem";


export default function AllTask( props ) {
  const {
    contentId, selectedIdx,
    todoList, doneList,
    deleteTodo, addDone,
  } = props;

  return (
    <ContentContainer ContentId={ contentId } SelectedIdx={ selectedIdx }>
      <TaskFunc {...props} />
      <TaskContainer ContentId={ contentId } SelectedIdx={ selectedIdx }>
      {
        todoList.isEmpty() && doneList.isEmpty() &&
        <EmptyContent> . . . add something . . . </EmptyContent>
      }
      { 
        !todoList.isEmpty() &&
        todoList.map( todoItem => (
          <TodoItem 
            key={ `Todo${todoItem.get('id')}` }
            ItemID={ todoItem.get('id') }
            Content={ todoItem.get('task') }
            TodoList={ todoList }
            DeleteTodo={ deleteTodo }
            AddDone={ addDone }
          />
        ))
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