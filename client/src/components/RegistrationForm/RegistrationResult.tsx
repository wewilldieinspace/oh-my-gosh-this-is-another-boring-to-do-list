// ZUSTAND
import { useAuthStore } from '../../data';
// COMPONENTS
import { Container } from './RegistrationForm.styles';
import { Text } from '../common';
// CONST
import { REGISTER_STEPS as STEPS } from '../../const';

export const RegistrationResult = () => {
  const { isAuth } = useAuthStore((store) => store);

  return (
    <Container isSuccess={isAuth}>
      <Text
        size="14px"
        color={isAuth ? '#00b700' : '#ff0000'}
        style={{
          textShadow: '2px 3px 13px rgb(34 60 80 / 90%)',
          width: '70vh',
          textAlign: 'center',
        }}
      >
        {
        isAuth
          ? STEPS[2].successMessage
          : STEPS[2].failMessage
      }
      </Text>
    </Container>
  );
};
