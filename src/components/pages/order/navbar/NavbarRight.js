import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const NavbarRight = () => {
    const { username } = useParams()

    return (
        <NavbarRightStyled>
            {/*<div>
                Navbar
            </div>*/}
            <div>
                <h1>Bonjour {username} </h1>
                <Link to="/">Déconnexion</Link>
            </div>
        </NavbarRightStyled>
    );
}

export default NavbarRight;

const NavbarRightStyled = styled.div`
  border: 1px solid black;
`;
