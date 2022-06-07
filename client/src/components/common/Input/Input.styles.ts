import styled from 'styled-components';

export const Input = styled.input`
    display: inline-block;

    min-height: 50px;

    padding: 0 1em;

    font-size: 16px;
    color: #000;

    background-color: #F6F7F8;

    border: 1px solid #C1D9E6;
    border-radius: 5px;
`;

export const TogglePasswordVisibilityButton = styled.span`
    position: absolute;
    display: inline-block;

    right: 2em;

    width: 20px;
    height: 20px;

    background-image: url("/assets/close_eye.png");
    background-repeat: no-repeat;
    background-size: cover;

    cursor: pointer;
`;
