import styled from 'styled-components';

const Button = styled.button`
    background-color: silver;
    border: none;
    border-radius: 100%;
    height: 200px;
    width: 200px;

    font-size: 2em;
    transition: background-color 0.3s, color 0.3s;

    :focus {
        outline: 0;
    }

    :hover {
        background-color: #e6e6e6;
    }
`;

export { Button };
