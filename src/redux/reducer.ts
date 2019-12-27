import { AnyAction } from 'redux';

import { State } from './types';
import { initialState } from './state';
import { PING, PONG, RESET } from './actionTypes';

function reducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        case PING:
            return { fetching: true, result: {} };

        case PONG:
            return { fetching: false, result: action.payload };

        case RESET:
            return { fetching: false, result: {} };

        default:
            return state;
    }
}

export { reducer };
