import React from 'react';
import logo from "../../assets/logo-orange.png"
import styled from 'styled-components';
import { theme } from "../../theme"

const Logo = ({className}) => {
    return (
        <LogoStyled className={className}>
            <h1>CRAZEE</h1>
            <img src={logo} alt='mon logo' className='logo'/>
            <h1>BURGER</h1>
        </LogoStyled>
    );
}

export default Logo;

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
