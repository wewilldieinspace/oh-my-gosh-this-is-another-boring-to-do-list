// COMPONENTS
import { Container } from './Loader.styles';
import { Text, Title } from '../common';

export const Loader = () => (
  <Container>
    <Text style={{ marginBottom: '.5em' }} size="60">{'¯\\_(ツ)_/¯'}</Text>
    <Title size="m">Loading....</Title>
  </Container>
);
