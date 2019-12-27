import React from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { PingButton, Wrapper, PongSuccess, PongFailure } from './styled';
import { ping } from './redux/actions';
import { State } from './redux/types';

export default function App(): JSX.Element {
    const dispatch = useDispatch();
    const fetching = useSelector((state: State) => state.fetching);
    const result = useSelector((state: State) => state.result);

    if (fetching) {
        return (
            <Wrapper>
                <FontAwesomeIcon icon={faSync} spin size="8x" />
            </Wrapper>
        );
    }

    if (!result.text) {
        return (
            <Wrapper>
                <PingButton onClick={(): AnyAction => dispatch(ping())}>
                    PING
                </PingButton>
            </Wrapper>
        );
    }

    const Pong = result.httpStatus === 200 ? PongSuccess : PongFailure;

    return (
        <Wrapper>
            <Pong>{result.text}</Pong>
        </Wrapper>
    );
}
