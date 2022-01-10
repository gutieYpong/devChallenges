import { layoutState } from "./initState";
import { 
  SET_POP_UP,
  SET_LOCATION_INPUT,
  SET_GUESTS_INPUT,
  GET_SEARCH_RESULT
} from "../actions/actions";

import { STAYS } from "../../constants/common";


const getSearchResult = ({ location, guests }) => {
  if( location === "" && guests === 0 )
  {
    return STAYS;
  }

  const LIST = STAYS.filter( property  =>
    ( location.toLowerCase().indexOf( property.city.toLowerCase() ) > -1 )
    &&
    ( guests <= property.maxGuests )
  );
  return LIST;
}

const layoutReducer = ( layout = layoutState, { type, payload } ) => {
  switch( type ) {
    case SET_POP_UP: 
      return {
        ...layout,
        isPopUp: ( payload ? true : false ),
      }
    case SET_LOCATION_INPUT: 
      return {
        ...layout,
        locationInput: payload,
    }
    case SET_GUESTS_INPUT: 
      return {
        ...layout,
        guestsInput: payload,
    }
    case GET_SEARCH_RESULT:
      return {
        ...layout,
        searchResult: getSearchResult( payload ),
      }
    default:
      return layout;
  }
};

export default layoutReducer;