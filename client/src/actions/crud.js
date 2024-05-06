import * as api from "../api/index";
import * as actionType from "../constants/actionTypes";

export const fetch_profile = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.LOADING });

    const response = await api.fetch_profile();
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// actions/crud.js

export const fetch_single_user_info = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.LOADING });
    const response = await api.getSingleUserInfo();
    console.log(
      "The response received in the single user info actions is",
      response
    );
    dispatch({
      type: actionType.FETCH_SINGLE_USER_INFO,
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};
