import { takeLatest, delay, put } from 'redux-saga/effects';

import { PING } from './actionTypes';
import { pong, reset } from './actions';

function* sendPing(): Generator {
    yield delay(1000);
    yield put(pong({ httpStatus: 200, text: 'PONG' }));
    yield delay(2000);
    yield put(reset());
}

export default function* rootSaga(): Generator {
    yield takeLatest(PING, sendPing);
}
