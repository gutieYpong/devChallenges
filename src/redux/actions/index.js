import axios from "axios";

import { 
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./types";
import { API_URL } from "../../constants/api"


export const fetchDataAction = ( query ) => {
  return async dispatch => {
    dispatch( fetchStart() );

    try {
      const result = await axios( `${API_URL}${query}` );
      dispatch( fetchSuccess( result.data ) );
    } catch ( e ) {
      dispatch( fetchFailure( e ) );
    }
  }
}

const fetchStart = () => ({
  type: FETCH_DATA_START
});

const fetchSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    ...data
  }
});

const fetchFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: {
    error
  }
});