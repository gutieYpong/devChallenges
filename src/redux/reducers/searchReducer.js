import { searchState } from "./initState";
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

const searchReducer = ( search = searchState, { type, payload } ) => {
  switch( type ) {
    case SET_POP_UP: 
      return {
        ...search,
        isPopUp: ( payload ? true : false ),
      }
    case SET_LOCATION_INPUT: 
      return {
        ...search,
        locationInput: payload,
    }
    case SET_GUESTS_INPUT: 
      return {
        ...search,
        guestsInput: payload,
    }
    case GET_SEARCH_RESULT:
      return {
        ...search,
        searchResult: getSearchResult( payload ),
      }
    default:
      return search;
  }
};

export default searchReducer;