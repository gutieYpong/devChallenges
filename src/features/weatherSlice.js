import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CORS_URL, LOCATION_SEARCH_API, WEATHER_INFO_API } from "../constants/api";


export const fetchData = createAsyncThunk( 'users/fetchByIdStatus', async( query ) => {
  let _woeid;
  if( query !== 'rejected' )
    _woeid = (await axios( `${ CORS_URL }${ LOCATION_SEARCH_API }${ query }` )).data[0].woeid;
  else
    _woeid = '44418';
  
  return (await axios( `${ CORS_URL }${ WEATHER_INFO_API }${ _woeid }` )).data;
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
      error: action.payload.error
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
      })
  }
});

export const weatherInfo = state => state.weather;

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = weatherSlice.actions;

export default weatherSlice.reducer;