import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/auth/operation';
import { Wrap, Form } from './LoginForm styled.js';

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
      <Form onSubmit={submitLogIn}>
        <label>
          EMAIL
          <input type="email" name="email" />
        </label>

        <label>
          PASSWORD
          <input type="text" name="password" />
        </label>
        <label></label>
        <button type="submit"> LOGIN </button>
      </Form>
    </Wrap>
  );
};
