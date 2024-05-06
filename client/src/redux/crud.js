//import { createSlice } from "@reduxjs/toolkit";
import * as actionType from "../constants/actionTypes";

const initialState = {
  userData: [],
  singleUserData: [],
  errors: "",
  isLoading: false,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOADING: {
      return { ...state, isLoading: true };
    }
    case actionType.FETCH_PROFILE: {
      return {
        ...state,
      };
    }
    case actionType.FETCH_SINGLE_USER_INFO: {
      console.log(
        "It has triggered the single user info reducer. and the data is ",
        action.data
      );
      return {
        ...state,
        singleUserData: action.data,
        isLoading: false,
      };
    }
    default:
      return initialState;
  }
};
