import { useSelector } from 'react-redux';
import { LoginForm } from '../components/loginForm/LoginForm';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

export const LogIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h2> LOGIN </h2>
      {!isLoggedIn && <LoginForm />}
    </div>
  );
};
