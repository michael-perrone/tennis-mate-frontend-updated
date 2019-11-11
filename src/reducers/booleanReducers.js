import { INSTRUCTOR_WANTS_TO_REGISTER } from "../actions/actions";
import { ADMIN_ENTERED } from "../actions/actions";
import {
  SHOW_NOTIFICATIONS,
  HIDE_NOTIFICATIONS,
  BOOK_A_COURT
} from "../actions/actions";

const initialState = {
  instructorRegister: false,
  adminEntered: false,
  showNotifications: false,
  hideNotifications: true,
  bookACourt: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INSTRUCTOR_WANTS_TO_REGISTER:
      return {
        ...state,
        instructorRegister: !state.instructorRegister
      };
    case BOOK_A_COURT:
      return {
        ...state,
        bookACourt: true
      };
    case SHOW_NOTIFICATIONS:
      return {
        ...state,
        showNotifications: true,
        hideNotifications: false
      };
    case HIDE_NOTIFICATIONS:
      return {
        ...state,
        showNotifications: false,
        hideNotifications: true
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
