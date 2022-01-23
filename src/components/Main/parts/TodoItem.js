import styled from "styled-components";
import * as dayjs from "dayjs";


const TodoItemContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 27px;

  input[type="checkbox"] {
    width: 22px;
    height: 22px;
    border: 1px solid #828282;
    border-radius: 4px;
    margin-right: 7px;

    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;

    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #663399;
      background-color: #FFFFFF;
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
    &:checked {
      background-color: #2F80ED;
      border: 0;
      
      &::before {
        transform: scale(1);
      }
      +span {
        text-decoration-line: line-through;
      }
    }
  }

  .todo-item--task {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
  .material-icons-outlined {
    margin-left: auto;
    color: #BDBDBD;
    cursor: pointer;
  }
  `;

export default function TodoItem({ Content, ItemID, TodoList, DoneList, DeleteTodo, AddDone, DeleteDone, Disabled, Checked, DeleteIcon }) {
  const addTodoToDone = () => {
    const index = TodoList.findIndex( item => item.get("id") === ItemID );
    const todoItem = TodoList.get( index ).toJS();

    DeleteTodo({ index });
    AddDone({ ...todoItem, doneDate: dayjs().format( "YYYY-MM-DD" ) })
  }

  const handleDeleteDone = () => {
    const index = DoneList.findIndex( item => item.get("id") === ItemID );

    DeleteDone({ index });
  }

  return (
    <TodoItemContainer>
      <input type="checkbox" 
        checked={ Checked && true }
        disabled={ Disabled && true }
        onChange={ TodoList && addTodoToDone }
      />
      <span className="todo-item--task">{ Content }</span>
      { 
        DeleteIcon && 
        <span
          className="material-icons-outlined"
          children={ DeleteIcon }
          onClick={ () => handleDeleteDone() }
        />
      }
    </TodoItemContainer>
  )
}