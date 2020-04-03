import { combineReducers } from "redux";
import wrapperReducer from "./wrapperReducer";
import authReducer from "../auth/authReducer";

export default combineReducers({
  wrapperReducer,
  authReducer,
});
