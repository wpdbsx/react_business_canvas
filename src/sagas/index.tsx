import {
  all,
  fork
} from "redux-saga/effects";

import resourceSaga from "./resourceSaga";

export default function* rootSaga() {
  yield all([fork(resourceSaga)]); //call과는 다르다.
}
