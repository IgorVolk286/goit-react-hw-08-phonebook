import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register"> REGISTER </NavLink>
      <NavLink to="/login"> LOGIN </NavLink>
    </div>
  );
};
