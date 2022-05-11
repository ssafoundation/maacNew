import { call, put, takeEvery } from "redux-saga/effects";
import { postData } from "./../../../helpers/api_helper";
import { loginSuccess, loginUserError } from "./actions";
// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

function* loginUser({ payload: { user, history } }) {
  try {
    const url = `/login`;
    const response = yield call(postData, url, user);
    const {
      UserLogin: {
        data: { _id, fullName, role, email },
      },
      token,
    } = response;
    yield put(
      loginSuccess(fullName, token, _id, email, role, response?.UserLogin)
    );

    if (!!history?.location?.state) {
      const { from } = history?.location?.state;
      history.push(from.pathname);
    } else {
      history.push("/dashboard");
    }
  } catch (err) {
    const message = err?.response?.data?.message || "Registration Failed!!";
    yield put(loginUserError(message));
  }
}

// function* fetchSingleProduct({ payload: { authtoken, id } }) {
//   console.log('id',id);
//   try {
// console.log('authtoken', authtoken);
//     const url = `/product/${id}`
//     const response = yield call(getData, url, authtoken)
//     yield put(getSingleProductSuccess(response))
//   } catch (error) {
//     yield put(getSingleProductFail(error))
//   }
// }

function* logoutUser({ payload: { history } }) {
  try {
    yield history.push("/");
  } catch (error) {
    console.log("error data", error);
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);

  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
