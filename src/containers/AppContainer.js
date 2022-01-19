import { connect } from "react-redux";

import App from "../App";
import { 
  setPopUpAction,
  setLocationInputAction,
  setGuestsInputAction,
  getSerachResultAction
} from "../redux/actions/actions";


const mapStateToProps = ({ search }) => ({
  isPopUp: search.isPopUp,
  locationInput: search.locationInput,
  guestsInput: search.guestsInput,
  searchResult: search.searchResult,
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