import { useEffect, useReducer } from 'react'
import axios from 'axios'

import { CORS_URL } from '../constants/api'
import { LOCATION_SEARCH_API } from '../constants/api';


const reducer = ( state, { type, payload } ) => {
  switch( type ) {
    case 'STATES_INIT':
      return {
        ...state,
        locations: [],
        isLoading: false,
        error: null,
      }
    case 'FETCH_INIT':
      return {
        ...state,
        locations: [],
        isLoading: true,
        error: null
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        locations: payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      throw new Error();
  }
}

export default function useLocationSearch( query ) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
    locations: [],
  });

  useEffect(() => {
    dispatch({ type: 'STATES_INIT' });

    if( !query ) return; // if query is empty, returns.

    let cancel;
    dispatch({ type: 'FETCH_INIT' });

    axios({
      method: 'GET',
      url: `${CORS_URL}${LOCATION_SEARCH_API}`, // https://www.metaweather.com/api/location/search/
      // url: `${LOCATION_SEARCH_API}`,
      params: { 'query': query },
      cancelToken: new axios.CancelToken( token => cancel = token ),
    }).then( res => {
      console.log(`res data: ${JSON.stringify(res.data)}`)
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
    }).catch( event => {
      console.log(`failed: ${event}`)
      if( axios.isCancel( event ) ) return;
      dispatch({ type: 'FETCH_FAILURE' });
    })

    return () => cancel();
  }, [query]);

  return state;
}