import { combineReducers } from "redux";
// Authentication
import Login from "./auth/login/reducer";
// import Account from "./auth/register/reducer";
import Layout from "./layout/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,

  // Account,
});

export default rootReducer;
