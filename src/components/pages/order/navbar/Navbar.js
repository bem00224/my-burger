import React from 'react';
import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../../reusable-ui/Logo';
import { refreshPage } from '../../../../utils/windows';
import { theme } from '../../../../theme';

const Navbar = () => {
    return (
        <NavbarStyled>
            <Logo className="logo-order-page" onClick={() => refreshPage()}/>
            <NavbarRight/>
        </NavbarStyled>
    );
}

export default Navbar;

const NavbarStyled = styled.div`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  /* align-items: center; */

  .logo-order-page {
    cursor: pointer;
  }
`;
