import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    // & > h1, & > form button, & > form input {
    //     margin-bottom: .5em;
    // }

    & > div {
        margin: .5em 0 .5em 0;
    }

    & > form {
        min-width: 80vh;
    }


`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
