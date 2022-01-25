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
      const randomQuote = await axios( `${ API_URL }${ query }` );

      const middleQuery = `quotes?author=`;
      const author = randomQuote.data.data[0].quoteAuthor;
      const quotes = await axios( `${ API_URL }${ middleQuery }${ author }` );

      dispatch( fetchSuccess( randomQuote.data, author, quotes.data ) );
    } catch ( e ) {
      dispatch( fetchFailure( e ) );
    }
  }
}

const fetchStart = () => ({
  type: FETCH_DATA_START
});

const fetchSuccess = ( data, author, quotesFromOneAuthor ) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
    author,
    quotesFromOneAuthor
  }
});

const fetchFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: {
    error
  }
});