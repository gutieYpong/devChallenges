import { connect } from "react-redux";

import Main from "../components/Main";
import { 
  addTodoAction, deleteTodoAction,
  addDoneAction, deleteDoneAction,
} from "../redux/actions/actions";


const mapStateToProps = ({ todo }) => ({ // this todo is from one of the alias in combineReducer
  todoList: todo.get("todoList"),
  doneList: todo.get("doneList")
})

const mapDispatchToProps = dispatch => {
  return {
    addTodo: payload => {
      dispatch( addTodoAction(payload) );
    },
    deleteTodo: payload => {
      dispatch( deleteTodoAction(payload) );
    },
    addDone: payload => {
      dispatch( addDoneAction(payload) );
    },
    deleteDone: payload => {
      dispatch( deleteDoneAction(payload) );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Main );