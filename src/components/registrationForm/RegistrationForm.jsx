import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/operation';
import {
  Wrap,
  Form,
  Label,
  Input,
  Title,
  ButtonReg,
} from './RegistrationForm styled ';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitReg = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrap>
      <Title>REGISTER</Title>
      <Form onSubmit={submitReg}>
        <Label>
          USER NAME
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Label>

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

        <ButtonReg type="submit"> REGISTRATION </ButtonReg>
      </Form>
    </Wrap>
  );
};
