import { connect } from "react-redux";
import App from "../App";
import { setPopUpAction, getSerachResultAction } from "../redux/actions/actions";
// import { setPopUp, setActiveId } from "../redux/actions/actions";

const mapStateToProps = ({ layout }) => ({
  isPopUp: layout.isPopUp,
  searchResult: layout.searchResult,
  // activeId: layout.activeId,
})

const mapDispatchToProps = dispatch => {
  return {
    setPopUp: payload => {
      dispatch( setPopUpAction( payload ) );
    },
    getSerachResult: payload => {
      dispatch( getSerachResultAction( payload ) );
    },
    // setActiveId: payload => {
    //   dispatch( setActiveId( payload ) );
    // },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );