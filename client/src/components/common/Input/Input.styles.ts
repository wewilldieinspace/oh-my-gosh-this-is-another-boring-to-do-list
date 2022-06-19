import styled from 'styled-components';

enum ImagesList {
    CLOSE = '/assets/close_eye.png',
    OPEN = '/assets/open_eye.png'
  }

export const Container = styled.div`
  position: relative
`;

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

export const TogglePasswordVisibilityButton = styled.span<{isPasswordHidden: boolean}>`
    display: inline-block;
    position: absolute;
  
    top: .5em;
    right: .5em;
    bottom: .5em;
  
    width: 30px;
  
    padding: .7em;
  
    background-image: url("${({ isPasswordHidden }) => (isPasswordHidden ? ImagesList.CLOSE : ImagesList.OPEN)}");
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
  
    cursor: pointer;
  `;
