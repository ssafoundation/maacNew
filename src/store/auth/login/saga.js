import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { postNonAuth } from '../../../helpers/backend_helper';
import { loginSuccess, loginUserError } from './actions';
// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from './actionTypes';

function* loginUser({ payload: { user, history } }) {
  try {
    const url = `/login`;
    const response = yield call(postNonAuth, url, user);
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
      history.push('/dashboard');
    }
  } catch (err) {
    const message = err?.response?.data?.message || 'Registration Failed!!';
    yield put(loginUserError(message));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    yield history.push('/');
  } catch (error) {
    console.log('error data', error);
  }
}

function* socialLogin({ payload: { data, history, url } }) {
  try {
    const response = yield call(postNonAuth, url, data);
    // localStorage.setItem('authUser', JSON.stringify(response));
    const {
      user: {
        UserLogin: { _id, fullName, role, email },
      },
      token,
    } = response;
    yield put(loginSuccess(fullName, token, _id, email, role, response?.user));
    if (!!history?.location?.state) {
      const { from } = history?.location?.state;
      history.push(from.pathname);
    } else {
      history.push('/dashboard');
    }
  } catch (err) {
    // yield put(apiError(error));
    const message = err?.response?.data?.message || 'Registration Failed!!';
    yield put(loginUserError(message));
    console.log('error data', err);
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
