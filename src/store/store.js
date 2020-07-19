import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import reducers from "./combinedReducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
