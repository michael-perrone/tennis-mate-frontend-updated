import { INSTRUCTOR_WANTS_TO_REGISTER } from "../actions/actions";
import { ADMIN_ENTERED } from "../actions/actions";

const initialState = {
  instructorRegister: false,
  adminEntered: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INSTRUCTOR_WANTS_TO_REGISTER:
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
}
