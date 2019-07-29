import { REGISTER } from "./actions";

export const registered = data => dispatch => {
  dispatch({
    type: REGISTER,
    payload: data
  });
};
