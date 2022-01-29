import axios from "axios";

import { 
  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  GENERATE_QUEST_SUCCESS,
} from "./types";

import { API_URL } from "../../constants/api"


export const fetchDataAction = ( query = "" ) => {
  return async dispatch => {
    dispatch( fetchStart() );

    try {
      const result = await axios( `${ API_URL }${ query }` );
      
      dispatch( fetchSuccess( result ) );
      dispatch( generateQuestAction( result ) );
    } catch ( e ) {
      dispatch( fetchFailure( e ) );
    }
  }
}

export const generateQuestAction = payload => {
  let question, answer, seed;
  let options = new Set();
  let list = [];

  while( options.size < 4 ) {
    seed = Math.floor( Math.random() * ( payload.data.length ) );
    if( options.has( payload.data[seed].name.common ) === false )
    {
      options.add( payload.data[seed].name.common );
      list.push( payload.data[seed] );
    }
  }

  while( true )
  {
    seed = Math.floor( Math.random() * ( list.length ) );

    if( localStorage.getItem( list[seed].name.common ) === null )
      break;
  }

  answer = list[seed].name.common;
  question = list[seed].capital !== "" ? list[seed].capital : list[seed].name.common; // if no capital found then just use common name
  
  localStorage.setItem( question, question );

  return dispatch => {
    // [...options] <- transform from Set() to Array
    dispatch( generateSuccess( question, answer, [...options].reduce(( prev, curr ) => {
      return [
        ...prev,
        { 
          option: {
            "value": curr,
            "isAns": curr === answer,
          }
        }
      ]
    }, []) ) ); 
  }
}

const fetchStart = () => ({
  type: FETCH_DATA_START
});

const fetchSuccess = ( data ) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  }
});

const fetchFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: {
    error
  }
});

const generateSuccess = ( question, answer, options ) => ({
  type: GENERATE_QUEST_SUCCESS,
  payload: {
    question,
    answer,
    options
  }
})