import axios from "axios";

import { generateQuestAction } from "./generateQuestAction";
import { fetchStart, fetchSuccess, fetchFailure } from ".";
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