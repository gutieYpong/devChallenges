import { fetchState } from "./initState";
import { 
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/types";


const fetchDataReducer = ( state = fetchState, { type, payload } ) => {
  switch( type ) {
    case FETCH_DATA_START: 
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: payload.data,
        author: payload.author,
        quotesFromOneAuthor: payload.quotesFromOneAuthor
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      }
    default:
      return state;
  }
};

export default fetchDataReducer;