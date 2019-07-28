import booleanReducers from "./booleanReducers";
import authReducer from "./authReducer";

import { combineReducers } from "redux";

export default combineReducers({ booleanReducers, authReducer });
