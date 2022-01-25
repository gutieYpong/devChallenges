import { connect } from "react-redux";

import App from "../App";
import { fetchDataAction } from "../redux/actions";

const mapStateToProps = ({ fetch }) => ({
  data: fetch.data,
  author: fetch.author,
  quotesFromOneAuthor: fetch.quotesFromOneAuthor,
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