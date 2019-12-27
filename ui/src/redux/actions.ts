import { AnyAction } from 'redux';

import { PING, PONG, RESET } from './actionTypes';
import { Pong } from './types';

function ping(): AnyAction {
    return {
        type: PING,
    };
}

function pong(response: Pong): AnyAction {
    return {
        type: PONG,
        payload: response,
    };
}

function reset(): AnyAction {
    return {
        type: RESET,
    };
}

export { ping, pong, reset };
