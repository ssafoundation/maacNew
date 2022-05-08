import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistConfig = {
//   key: 'primary',
//   storage,
//   whitelist: ['Login', 'CardReducer'],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
