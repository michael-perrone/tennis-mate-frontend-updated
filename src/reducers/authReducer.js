import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  INSTRUCTOR_LOGIN_SUCCESS,
  INSTRUCTOR_LOGOUT,
  ADMIN_LOADED,
  ADMIN_LOADING,
  USER_LOADED,
  USER_LOADING,
  INSTRUCTOR_LOADED,
  INSTRUCTOR_LOADING,
  USER_REGISTER_SUCCESS,
  ADMIN_REGISTER_SUCCESS,
  INSTRUCTOR_REGISTER_SUCCESS
} from "../actions/actions";
import decoder from "jwt-decode";

const initalState = {
  token: localStorage.getItem("token"),
  instructorToken: localStorage.getItem("instructorToken"),
  adminToken: localStorage.getItem("adminToken"),
  isUserAuthenticated: localStorage.getItem("token") ? true : false,
  isAdminAuthenticated: localStorage.getItem("adminToken") ? true : false,
  isInstructorAuthenticated: localStorage.getItem("instructorToken")
    ? true
    : false,
  loading: false,
  isAuthenticated: localStorage.getItem('token') || localStorage.getItem('instructorToken') || localStorage.getItem('adminToken') ? true : false, 
  user: localStorage.getItem("token")
    ? decoder(localStorage.getItem("token"))
    : null,
  admin: localStorage.getItem("adminToken")
    ? decoder(localStorage.getItem("adminToken"))
    : null,
  instructor: localStorage.getItem("instructorToken")
    ? decoder(localStorage.getItem("instructorToken"))
    : null
};

export default function(state = initalState, action) {
  switch (action.type) {
    case INSTRUCTOR_LOGIN_SUCCESS:
      localStorage.setItem("instructorToken", action.payload.instructorToken);
      return {
        ...state,
        isAuthenticated: true,
        isInstructorAuthenticated: true,
        instructorToken: localStorage.getItem("instructorToken"),
        instructor: decoder(localStorage.getItem("instructorToken"))
      };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isUserAuthenticated: true,
        token: localStorage.getItem("token"),
        user: decoder(localStorage.getItem("token"))
      };
    case ADMIN_LOGIN_SUCCESS:
      localStorage.setItem("adminToken", action.payload.adminToken);
      return {
        ...state,
        isAuthenticated: true,
        isAdminAuthenticated: true,
        admin: decoder(localStorage.getItem("adminToken")),
        adminToken: localStorage.getItem("adminToken")
      };
    case INSTRUCTOR_REGISTER_SUCCESS:
      localStorage.setItem("instructorToken", action.payload.instructorToken);
      return {
        ...state,
        isAuthenticated: true,
        isInstructorAuthenticated: true,
        instructorToken: localStorage.getItem("instructorToken"),
        instructor: decoder(localStorage.getItem("instructorToken"))
      };
    case USER_REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isUserAuthenticated: true,
        token: localStorage.getItem("token"),
        user: decoder(localStorage.getItem("token"))
      };
    case ADMIN_REGISTER_SUCCESS:
      localStorage.setItem("adminToken", action.payload.adminToken);
      return {
        ...state,
        isAuthenticated: true,
        isAdminAuthenticated: true,
        admin: decoder(localStorage.getItem("adminToken")),
        adminToken: localStorage.getItem("adminToken")
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isUserAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case ADMIN_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAdminAuthenticated: true,
        loading: false,
        admin: action.payload
      };
    case INSTRUCTOR_LOADING:
      return {
        ...state,
        loading: true
      };
    case INSTRUCTOR_LOADED:
      return {
        ...state,
        isInstructorAuthenticated: true,
        loading: false,
        instructor: action.payload
      };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isUserAuthenticated: false,
        user: null,
        token: null
      };
    case ADMIN_LOGOUT:
      localStorage.removeItem("adminToken");
      return {
        ...state,
        isAuthenticated: false,
        isAdminAuthenticated: false,
        admin: null,
        adminToken: null
      };
    case INSTRUCTOR_LOGOUT:
      localStorage.removeItem("instructorToken");
      return {
        ...state,
    
      isAuthenticated: false,  
      isInstructorAuthenticated: false,
      instructor: null,
      instructorToken: null
      };

    /*    case REGISTER:
      localStorage.setItem("token", action.payload.token);
      const token = decoder(state.token);
      return {
        ...state,
        ...action.payload,
        user: token.user.username,
        isAuthenticated: true,
        loading: true
      }; */
    /*  case REGISTER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }; */
    default:
      return state;
  }
}
