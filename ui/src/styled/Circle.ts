import styled from 'styled-components';

const Circle = styled.div`
    border: none;
    border-radius: 100%;
    height: 200px;
    width: 200px;

    font-size: 2em;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    line-height: 200px;
`;

const PongSuccess = styled(Circle)`
    background-color: springgreen;
`;

const PongFailure = styled(Circle)`
    background-color: tomato;
`;

export { PongSuccess, PongFailure };
