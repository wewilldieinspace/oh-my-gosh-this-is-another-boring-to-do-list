import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    & > h1, & > form button, & > form input {
        margin-bottom: .5em;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
