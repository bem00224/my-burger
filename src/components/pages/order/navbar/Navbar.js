import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Navbar = () => {
    const { username } = useParams()
    return (
        <NavbarStyled>
            <div>
                Logo
            </div>
            <div>
            <h1>Bonjour {username} </h1>
            <button><Link to="/">Déconnexion</Link></button>
            </div>
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
`;
