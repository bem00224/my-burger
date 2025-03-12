import React from 'react';
import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../../reusable-ui/Logo';

const Navbar = () => {
    return (
        <NavbarStyled>
            <Logo className="logo"/>
            <NavbarRight/>
        </NavbarStyled>
    );
}

export default Navbar;

const NavbarStyled = styled.div`
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .logo {
    transform: scale(1);
  }
`;
