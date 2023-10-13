import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/auth/selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import { AboutUser } from 'components/AboutUser/AboutUser';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar styled.js';
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <AboutUser /> : <AuthNav />}
      </Header>
    </div>
  );
};
