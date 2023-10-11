import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/operation';

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
    <div>
      <form onSubmit={submitReg}>
        <label>
          USER NAME
          <input type="text" name="name" />
        </label>

        <label>
          EMAIL
          <input type="email" name="email" />
        </label>

        <label>
          PASSWORD
          <input type="text" name="password" />
        </label>
        <label></label>
        <button type="submit"> REGISTRATION </button>
      </form>
    </div>
  );
};
