import { connect } from "react-redux";

import App from "../App";
import { fetchDataAction } from "../redux/actions/fetchDataAction";
import { generateQuestAction } from "../redux/actions/generateQuestAction";

const mapStateToProps = ({ fetch }) => ({
  data: fetch.data,
  quest: fetch.quest,
  error: fetch.error,
  isLoading: fetch.isLoading,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch( fetchDataAction() );
    },
    generateQuest: payload => {
      dispatch( generateQuestAction(payload) );
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );