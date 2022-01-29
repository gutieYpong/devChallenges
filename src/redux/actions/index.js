import { 
  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  GENERATE_QUEST_SUCCESS,
} from "./types";


export const fetchStart = () => ({
  type: FETCH_DATA_START
});

export const fetchSuccess = ( data ) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  }
});

export const fetchFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: {
    error
  }
});

export const generateSuccess = ( question, flag, answer, options ) => ({
  type: GENERATE_QUEST_SUCCESS,
  payload: {
    question,
    flag,
    answer,
    options,
  }
})