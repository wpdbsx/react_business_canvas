import {
    all,
    delay,
    fork,
    put,
    takeEvery,

} from "redux-saga/effects";

import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../reducers/resource";



function* addContent(action: { type: string, data: string, status: 'url' | 'image' }) {
    try {

        const min = 300; // 최소 값
        const max = 1000; // 최대 값
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        //Math.random() 함수는 0 이상 1 미만의 난수를 반환
        // 300~1000 , 701 까지 범위로 잡습니다.
        //  0+300 ~701=300   => 300 ~ 1001 까지의 값이 나옵니다.
        const randomPercent = Math.floor(Math.random() * 101); // 0부터 100까지의 난수 생성

        yield delay(randomValue);
        if (randomPercent <= 80) {

            yield put({ type: ADD_POST_SUCCESS, data: action.data, status: action.status });


        } else {
            yield put({ type: ADD_POST_FAILURE, error: "실패하셨습니다!" });
        }

    } catch (err) {
        console.log(err)
    }
}


function* watchAddContent() {
    yield takeEvery(ADD_POST_REQUEST, addContent);
}


export default function* postSaga() {
    yield all(
        [fork(watchAddContent)]
    );
}