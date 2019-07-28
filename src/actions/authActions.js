import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./actions";

export const registered = data => dispatch => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: data
  });
};
