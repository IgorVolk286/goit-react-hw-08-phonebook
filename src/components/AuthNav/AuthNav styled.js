import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const WrapNav = styled.div`
  display: flex;
  gap: 40px;
`;

export const Nav = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
  }
`;
