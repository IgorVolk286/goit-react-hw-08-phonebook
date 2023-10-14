import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/auth/operation';
import {
  Wrap,
  Form,
  Label,
  Input,
  Title,
  ButtonLogIn,
} from './LoginForm styled.js';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const submitLogIn = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrap>
      <Title> LOG IN </Title>

      <Form onSubmit={submitLogIn}>
        <Label>
          EMAIL
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Label>

        <Label>
          PASSWORD
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Label>

        <ButtonLogIn type="submit"> LOG IN </ButtonLogIn>
      </Form>
    </Wrap>
  );
};
