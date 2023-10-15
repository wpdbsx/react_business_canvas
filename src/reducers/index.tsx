
import resource from "./resource";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // session storage
const persistConfig = {
  key: "react",
  storage,  //storage : 세션, 로컬 스토리지 중에서 저장할 스토리지를 지정한다. session 지정
  whitelist: ['resource'] //스토리지에 저장할 리덕스 모듈을 나열한다.
};
const rootReducer = combineReducers({
  resource
});


export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
