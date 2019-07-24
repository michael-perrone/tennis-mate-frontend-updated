import { INSTRUCTOR_REGISTER } from "../actions/actions";
import { ADMIN_ENTERED } from "../actions/actions";
import alert from "./alert";

import { combineReducers } from "redux";

export default combineReducers({ alert });

const initialState = {
  instructorRegister: false,
  adminEntered: false
};

export const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case INSTRUCTOR_REGISTER:
      return {
        ...state,
        instructorRegister: !state.instructorRegister
      };

    case ADMIN_ENTERED:
      return {
        ...state,
        adminEntered: !state.adminEntered
      };

    default: {
      return state;
    }
  }
};
