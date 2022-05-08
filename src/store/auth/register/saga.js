import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { postData } from '../../../helpers/backend_helper';
//Include Both Helper File with needed methods
import { registerUserFailed, registerUserSuccessful } from './actions';
//Account Redux states
import { REGISTER_USER } from './actionTypes';

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user, history } }) {
  try {
    const url = `/signup`;
    const registerResponse = yield call(postData, url, user);
    if (registerResponse.status === 'success') {
      yield put(
        registerUserSuccessful(
          'Account registered successful. Check your email for verify account'
        )
      );
      setTimeout(() => {
        history.push('/check-email');
      }, 2000);
    }
  } catch (error) {
    const message = error?.response?.data?.message || 'Registration Failed!!';
    yield put(registerUserFailed(message));
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;
