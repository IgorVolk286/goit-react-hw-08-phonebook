import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavMain, WrapNav } from './Navigation styled';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <WrapNav>
      <NavMain to="/"> Home </NavMain>
      {isLoggedIn && <NavMain to="/contacts">Contacts</NavMain>}
    </WrapNav>
  );
};
