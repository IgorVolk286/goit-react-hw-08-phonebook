import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
