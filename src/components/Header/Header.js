import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo/journi-logo.svg';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';

export default function Header() {
  return (
    <header>
      <StyledNavLink to="/">
        <Heading>
          <StyledLogo />
          <ScreenReaderOnly>Journi</ScreenReaderOnly>
        </Heading>
      </StyledNavLink>
    </header>
  );
}

const Heading = styled.h1`
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const StyledLogo = styled(Logo)`
  width: 160px;
`;
