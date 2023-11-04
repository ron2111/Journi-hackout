import { NavLink } from 'react-router-dom';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { HiHome as Home } from 'react-icons/hi';
import { FaCompass as Compass } from 'react-icons/fa';
import { IoIosCreate as Create } from 'react-icons/io';
import { GoGlobe as Globe } from 'react-icons/go';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <NavLinkStyled to="/">
        <ScreenReaderOnly>Past Trips</ScreenReaderOnly>
        <Home size={33} />
      </NavLinkStyled>
      <NavLinkStyled to="/formPage">
        <ScreenReaderOnly>Create new Trip</ScreenReaderOnly>
        <Create size={33} />
      </NavLinkStyled>
      <NavLinkStyled to="/futurePage">
        <ScreenReaderOnly>Future Trips</ScreenReaderOnly>
        <Compass size={33} />
      </NavLinkStyled>
      <NavLinkStyled to="/mapPage">
        <ScreenReaderOnly>Map</ScreenReaderOnly>
        <Globe size={33} />
      </NavLinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 7vh;
  background-color: var(--color-dark-gray);
  max-width: 768px;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: var(--color-white);

  &.active {
    color: var(--color-yellow);
  }
`;
