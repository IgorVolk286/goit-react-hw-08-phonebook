import { WrapNav, Nav } from './AuthNav styled';
export const AuthNav = () => {
  return (
    <WrapNav>
      <Nav to="/register"> REGISTER </Nav>
      <Nav to="/login"> LOG IN </Nav>
    </WrapNav>
  );
};
