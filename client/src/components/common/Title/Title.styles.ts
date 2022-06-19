import styled from 'styled-components';

export const H1Tag = styled.h1<{size: string}>`
  font-size: ${({ size }) => size};
  font-weight: 700;
  color: #282828;
`;

export const H2Tag = styled.h2<{size: string}>`
  font-size: ${({ size }) => size};
  font-weight: 700;
  color: #282828;
`;

export const H3Tag = styled.h3<{size: string}>`
  font-size: ${({ size }) => size};
  font-weight: 700;
  color: #282828;
`;
