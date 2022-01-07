import { connect } from "react-redux";
import App from "../App";
import { setPopUp, setActiveId } from "../redux/actions/actions";

const mapStateToProps = ({ layout }) => ({
  isPopUp: layout.isPopUp,
  activeId: layout.activeId,
})

const mapDispatchToProps = dispatch => {
  return {
    setPopUp: payload => {
      dispatch( setPopUp( payload ) );
    },
    setActiveId: payload => {
      dispatch( setActiveId( payload ) );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );