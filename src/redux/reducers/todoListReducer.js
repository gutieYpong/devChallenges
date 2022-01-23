import { fromJS, updateIn } from "immutable";

import { todoListState } from "./initState";
import { saveTodoList, saveDoneList } from "../../utils/localStorage";
import types from "../../constants/actionTypes";

const addTodo = ( todolist, payload ) => {
  const list = todolist.get("todoList");
  const updatedList = list.insert( 0, fromJS(payload) );

  saveTodoList( updatedList.toJS() );

  return todolist.merge( fromJS({ "todoList": updatedList }) );
}

const deleteTodo = ( todolist, { index, ...payload } ) => {
  const todoList = todolist.get("todoList");
  const updatedList = todoList.delete( index );

  saveTodoList( updatedList.toJS() );

  return todolist.merge( fromJS({ "todoList": updatedList }) );
}

const addDone = ( donelist, payload ) => {
  const list = donelist.get("doneList");
  const updatedList = list.insert( 0, fromJS(payload) );

  saveDoneList( updatedList.toJS() );

  return donelist.merge( fromJS({ "doneList": updatedList }) );
}

const deleteDone = ( todolist, payload ) => {
  const doneList = todolist.get("doneList");
  const updatedList = doneList.delete( payload.index );

  saveDoneList( updatedList.toJS() );

  return todolist.merge( fromJS({ "doneList": updatedList }) );
}

const todoListReducer = ( todo = todoListState, { type, payload } ) => {
  switch( type ) {
    case types.ADD_TODO_TO_DOING: 
      return;
    case types.ADD_TODO:
      return addTodo( todo, payload );
    case types.DELETE_TODO:
      return deleteTodo( todo, payload );
    case types.ADD_DONE:
      return addDone( todo, payload );
    case types.DELETE_DONE:
      return deleteDone( todo, payload );
    default:
      return todo;
  }
};

export default todoListReducer;