import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapNav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const NavMain = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
  }
`;
