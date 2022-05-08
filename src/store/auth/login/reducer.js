import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  isSocialLogin: false,
  id: '',
  username: '',
  token: '',
  email: '',
  userrole: '',
  error: '',
  data: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: '',
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        email: action.payload.email,
        id: action.payload.id,
        userrole: action.payload.userrole,
        loading: false,
        isSocialLogin: false,
        error: '',
        data: action.payload.data,
      };
      break;
    case LOGIN_USER_ERROR:
      state = {
        ...state,
        username: '',
        token: '',
        email: '',
        userrole: '',
        loading: false,
        isSocialLogin: false,
        error: action.payload.data,
        data: {},
      };
      break;
    case LOGOUT_USER:
      state = {
        ...state,
        id: '',
        username: '',
        token: '',
        email: '',
        userrole: '',
        data: {},
      };
      break;
    case LOGOUT_USER_SUCCESS:
      state = { ...state };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

const persistConfig = {
  keyPrefix: 'exmPro-',
  key: 'login',
  storage,
};

export default persistReducer(persistConfig, login);
