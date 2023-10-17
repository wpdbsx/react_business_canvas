import {
    all,
    call,
    delay,
    fork,
    put,
    takeEvery
} from "redux-saga/effects";
import { ADD_URL_FAILURE, ADD_URL_SUCCESS, ADD_URL_REQUEST, ADD_IMAGE_REQUEST, RESET_URL_STATUS, ADD_IMAGE_FAILURE, ADD_IMAGE_SUCCESS, RESET_IMAGE_STATUS, ADD_IMAGE_LODING_FALSE } from "../reducers/resource";
import upload from "../apis/upload";


const delayFunction = (): { randomValue: number, randomPercent: number } => {
    const min = 300; // 최소 값
    const max = 1000; // 최대 값
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    //Math.random() 함수는 0 이상 1 미만의 난수를 반환
    // 300~1000 , 701 까지 범위로 잡습니다.
    //  0+300 ~701=300   => 300 ~ 1001 까지의 값이 나옵니다.
    const randomPercent = Math.floor(Math.random() * 101); // 0부터 100까지의 난수 생성
    return { randomValue, randomPercent }
}

function* addURL(action: { type: string, data: string, status: 'url' | 'image' }) {
    try {
        const { randomValue, randomPercent } = delayFunction()

        yield delay(randomValue);
        if (randomPercent <= 80) {
            yield put({ type: ADD_URL_SUCCESS, data: action.data });
        } else {
            yield put({ type: ADD_URL_FAILURE, errorMessage: "실패하셨습니다!" });
        }
        yield delay(2000);   // 토스트 팝업 설정 시간
        yield put({ type: RESET_URL_STATUS });

    } catch (err) {
        console.log(err)
    }
}

function* addImage(action: { type: string, data: File[], status: 'url' | 'image' }) {
    try {


        const imageList = action.data
        let count = 1;
        for (const image of imageList) {

            const { randomValue, randomPercent } = delayFunction();
            console.log(image)
            yield delay(randomValue); // 랜덤 딜레이
            if (randomPercent <= 80) {
                const result: string = yield call(upload, image) // 하나의파일 업로드
                yield put({ type: ADD_IMAGE_SUCCESS, data: result, viewName: image.name, successMessage: `${count++}번 파일 성공!` });
            } else {
                yield put({ type: ADD_IMAGE_FAILURE, errorMessage: `${count++}번 파일 실패!` });
            }

            yield delay(500);   // 토스트 팝업 설정 시간
            yield put({ type: RESET_IMAGE_STATUS });
        }
        yield put({ type: ADD_IMAGE_LODING_FALSE, error: "실패하셨습니다!" });


    } catch (err) {
        console.log(err)
    }
}
function* watchAddUrl() {
    yield takeEvery(ADD_URL_REQUEST, addURL);
}

function* watchAddImage() {
    yield takeEvery(ADD_IMAGE_REQUEST, addImage);
}

export default function* postSaga() {
    yield all(
        [fork(watchAddUrl), fork(watchAddImage)]
    );
}