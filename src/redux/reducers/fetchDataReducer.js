import { fetchState } from "./initState";
import { 
  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  GENERATE_QUEST_SUCCESS,
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
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      }
    case GENERATE_QUEST_SUCCESS:
      return {
        ...state,
        quest: {
          question: payload.question,
          answer: payload.answer,
          options: payload.options
        }
      }
    default:
      return state;
  }
};

export default fetchDataReducer;