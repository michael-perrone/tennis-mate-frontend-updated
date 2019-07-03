import { SHOW_MODAL } from "../actions/actions";

const initialState = {
  showModal: false
};

export const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      };
    default: {
      return state;
    }
  }
};
