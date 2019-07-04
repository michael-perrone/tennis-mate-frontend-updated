import { INSTRUCTOR_REGISTER } from "../actions/actions";

const initialState = {
  instructorRegister: false
};

export const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case INSTRUCTOR_REGISTER:
      return {
        ...state,
        instructorRegister: !state.instructorRegister
      };
    default: {
      return state;
    }
  }
};
