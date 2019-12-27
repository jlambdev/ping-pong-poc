import { takeLatest, delay, put, call, CallEffect } from 'redux-saga/effects';

import config from '../config/environment';

import { PING } from './actionTypes';
import { pong, reset } from './actions';

const DEFAULT_RESPONSE = { httpStatus: 200, text: 'PONG' };

function* sendPing(): Generator {
    if (config.ENABLE_API && !!config.API_URI) {
        const response: Response | any = yield call(() =>
            fetch(config.API_URI),
        );

        if (!response.httpStatus) {
            throw Error(
                'There was a problem fetching a response from the Ping Pong API',
            );
        }

        yield put(
            pong({
                httpStatus: response.httpStatus,
                text: response.message,
            }),
        );
        yield delay(2000);
        yield put(reset());
    } else {
        yield delay(1000);
        yield put(pong(DEFAULT_RESPONSE));
        yield delay(2000);
        yield put(reset());
    }
}

export default function* rootSaga(): Generator {
    yield takeLatest(PING, sendPing);
}
