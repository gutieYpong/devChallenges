export const SET_POP_UP = "SET_POP_UP";
export const setPopUpAction = payload => ({
  type: SET_POP_UP,
  payload
});

export const SET_LOCATION_INPUT = "SET_LOCATION_INPUT";
export const setLocationInputAction = payload => ({
  type: SET_LOCATION_INPUT,
  payload
});

export const SET_GUESTS_INPUT = "SET_GUESTS_INPUT";
export const setGuestsInputAction = payload => ({
  type: SET_GUESTS_INPUT,
  payload
});

export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const getSerachResultAction = ( location, guests ) => ({
  type: GET_SEARCH_RESULT,
  payload: {
    location,
    guests
  }
});


// export const SET_ACTIVE_ID = "SET_ACTIVE_ID";
// export const setActiveId = payload => ({
//   type: SET_ACTIVE_ID,
//   payload,
// });
