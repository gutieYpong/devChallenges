import { layoutState } from "./initState";
import { SET_POP_UP, GET_SEARCH_RESULT } from "../actions/actions";
import { STAYS } from "../../constants/common";


const getSearchResult = payload => {
  const LIST = STAYS.filter( property  =>
    payload.toLowerCase().indexOf( property.city.toLowerCase() ) > -1
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