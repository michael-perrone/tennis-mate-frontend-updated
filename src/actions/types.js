import { SET_ALERT, REMOVE_ALERT } from "./actions";

export const setAlert = (msg, alertType) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType }
  });
};
