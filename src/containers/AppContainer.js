import { connect } from "react-redux";
import App from "../App";
import { 
  setPopUpAction,
  setLocationInputAction,
  setGuestsInputAction,
  getSerachResultAction
} from "../redux/actions/actions";


const mapStateToProps = ({ layout }) => ({
  isPopUp: layout.isPopUp,
  locationInput: layout.locationInput,
  guestsInput: layout.guestsInput,
  searchResult: layout.searchResult,
})

const mapDispatchToProps = dispatch => {
  return {
    setPopUp: payload => {
      dispatch( setPopUpAction( payload ) );
    },
    setLocationInput: payload => {
      dispatch( setLocationInputAction( payload ) );
    },
    setGuestsInput: payload => {
      dispatch( setGuestsInputAction( payload ) );
    },
    getSerachResult: ( location, guests ) => {
      dispatch( getSerachResultAction( location, guests ) );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );