import { SET_ALERT, REMOVE_ALERT } from "../actions/actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      if (state.msg === action.payload.msg) {
        return state;
      } else if (state.msg !== undefined && action.payload.msg === undefined) {
        return {};
      } else {
        return action.payload;
      }

    case REMOVE_ALERT:
      return state.filter(alert => {
        return alert.id !== action.payload;
      });
    default:
      return state;
  }
}
