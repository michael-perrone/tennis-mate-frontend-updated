import { SET_ALERT, REMOVE_ALERT } from "../actions/actions";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      const found = state.find(element => {
        return element.msg === action.payload.msg;
      });
      if (found) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case REMOVE_ALERT:
      return state.filter(alert => {
        return alert.id !== action.payload;
      });
    default:
      return state;
  }
}
