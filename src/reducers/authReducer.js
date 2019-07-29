import { REGISTER, REGISTER_FAILED } from "../actions/actions";
import decoder from "jwt-decode";

const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initalState, action) {
  switch (action.type) {
    case REGISTER:
      localStorage.setItem("token", action.payload.token);
      const token = decoder(state.token);

      console.log(token);
      console.log("hi");
      return {
        ...state,
        ...action.payload,
        user: token.user.username,
        isAuthenticated: true,
        loading: true
      };
    case REGISTER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
