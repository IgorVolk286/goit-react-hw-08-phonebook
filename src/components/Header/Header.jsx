import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/auth/selectors';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import { AboutUser } from 'components/AboutUser/AboutUser';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn ? <AboutUser /> : <AuthNav />}
      </header>
    </div>
  );
};
