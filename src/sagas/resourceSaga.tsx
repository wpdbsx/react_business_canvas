import {
    all,
    call,
    delay,
    fork,
    put,
    take,
    takeEvery,
    takeLatest,
    throttle
} from "redux-saga/effects";
import axios from "axios";


interface postType {
    data: string;
    type: string;
}







export default function* postSaga() {
    yield all(
        []
    ); //call과는 다르다.
}