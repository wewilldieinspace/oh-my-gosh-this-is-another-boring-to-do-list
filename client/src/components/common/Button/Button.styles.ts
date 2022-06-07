import styled from 'styled-components';

export const Button = styled.button<{bgColor: string}>`
  display: inline-block;

  padding: 10px 20px;

  color: #F0F0F0;

  background-color: ${({ bgColor }) => bgColor};

  border-width: 0;

  cursor: pointer;

  filter: brightness(100%);

  transition: filter .3s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
`;
