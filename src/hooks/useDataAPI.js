import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';


const dataFetchReducer = ( state, { type, payload } ) => {
  switch ( type ) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  // const [isFetch, setIsFetch] = useState(false);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false; // ABORT DATA FETCHING IN EFFECT HOOK

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);

        if (!didCancel) // ABORT DATA FETCHING IN EFFECT HOOK
        {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) // ABORT DATA FETCHING IN EFFECT HOOK
        {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true; // ABORT DATA FETCHING IN EFFECT HOOK
    };
  }, [url]);

  return [state, setUrl];
};

export default useDataApi;