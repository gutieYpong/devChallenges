import { connect } from "react-redux";

import App from "../App";
import { fetchDataAction } from "../redux/actions";

const mapStateToProps = ({ fetch }) => ({
  // todoList: todo.get("todoList"),
  // doneList: todo.get("doneList")
  data: fetch.data,
  error: fetch.error,
  isLoading: fetch.isLoading,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchData: payload => {
      dispatch( fetchDataAction(payload) );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );