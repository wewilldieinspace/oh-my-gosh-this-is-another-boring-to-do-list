import styled from 'styled-components';

export const Element = styled.p<{
  size: string;
  color: string;
}>`
  font-size: ${({ size }) => size};
  color: #282828;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;
