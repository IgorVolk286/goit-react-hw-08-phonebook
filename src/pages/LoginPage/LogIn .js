import { useSelector } from 'react-redux';
import { LoginForm } from '../../components/loginForm/LoginForm';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { WrapLogInPage } from './Login styled';
export const LogIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <WrapLogInPage>{!isLoggedIn && <LoginForm />}</WrapLogInPage>;
};
