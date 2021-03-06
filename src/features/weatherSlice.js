import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOCATION_SEARCH_API, WEATHER_INFO_API } from "../constants/api";
import { WEATHER_SAMPLE } from "../constants/sample";


export const fetchData = createAsyncThunk( 'users/fetchByIdStatus', async( query='rejected' ) => {
  let _woeid;
  if( query !== 'rejected' )
  {
    if( isNaN(query) ) // isNaN(): if variable is not a number, returns true, else returns false.
      _woeid = (await axios.get( `${ LOCATION_SEARCH_API }${ query }` )).data[0].woeid;
    else
      _woeid = query;
  }
  else
    _woeid = '44418';

  return (await axios( `${ WEATHER_INFO_API }${ _woeid }/` )).data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    fetchDataStart: ( state, action ) => ({
      ...state,
    }),
    fetchDataSuccess: ( state, action ) => ({
      ...state,
      error: null,
      data: action.payload.data,
    }),
    fetchDataFailure: ( state, action ) => ({
      ...state,
      error: action.payload.error,
    }),
  },
  extraReducers( builder ) {
    builder
      .addCase( fetchData.pending, ( state, action ) => {
        state.status = 'loading';
      })
      .addCase( fetchData.fulfilled, ( state, action ) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase( fetchData.rejected, ( state, action ) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.data = WEATHER_SAMPLE[0];
      })
  }
});

export const weatherInfo = state => state.weather;

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = weatherSlice.actions;

export default weatherSlice.reducer;