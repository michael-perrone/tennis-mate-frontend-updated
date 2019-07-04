import { FLIP_FORM } from "../actions/actions";

const initialState = {
  showModal: false
};

export const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case FLIP_FORM:
      return {
        ...state,
        flipForm: !state.flipForm
      };
    default: {
      return state;
    }
  }
};
