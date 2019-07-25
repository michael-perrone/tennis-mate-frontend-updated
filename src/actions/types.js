import { SET_ALERT, INSTRUCTOR_REGISTER } from "./actions";

export const setAlert = (msg, alertType) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType }
  });
};

export const instructorRegisterHandler = () => dispatch => {
  dispatch({
    type: INSTRUCTOR_REGISTER
  });
};
