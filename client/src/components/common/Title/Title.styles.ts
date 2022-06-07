import styled from 'styled-components';

export const H1Tag = styled.h1<{size: string}>`
  font-size: ${({ size }) => size};
  font-weight: 700;
  color: #282828;
`;
