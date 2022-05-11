import { all, fork } from "redux-saga/effects";
import AuthSaga from "./auth/login/saga";
//public
// import AccountSaga from "./auth/register/saga";
import LayoutSaga from "./layout/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(LayoutSaga)]);
}
