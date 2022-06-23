import styled from 'styled-components';

enum ImagesList {
    SUCCESS = '/assets/register_successful.png',
    FAILED = '/assets/register_failed.png'
  }

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 2.5em;
`;

export const Container = styled.div<{isSuccess: boolean}>`
    display: flex;
    justify-content: center;
    align-items: end;

    min-width: 80vh;
    min-height: 70vh;

    padding: 20px;

    background-image: url("${({ isSuccess }) => (isSuccess ? ImagesList.SUCCESS : ImagesList.FAILED)}");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 3vh;

    border: 2px solid ${({ isSuccess }) => (isSuccess ? '#00b700' : '#ff0000')};
    border-radius: 35px;

    box-shadow: 0px 0px 45px 17px rgba(34, 60, 80, 0.2);
`;
