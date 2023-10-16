import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import rootReducer from '../reducers';


const configureStore = () => {
  // Redux-Saga 미들웨어 생성
  const sagaMiddleware = createSagaMiddleware();


  // 개발 환경과 프로덕션 환경에 따른 Redux DevTools 설정
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(sagaMiddleware))
      : composeWithDevTools(applyMiddleware(sagaMiddleware));

  // Redux 스토어 생성 및 설정
  const store = createStore(rootReducer, enhancer);

  // Redux-Saga 미들웨어에 Saga 함수 연결
  sagaMiddleware.run(rootSaga)

  return store;
};



export default configureStore;
