import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Profile from './Profile';

const NavbarRight = () => {
    const { username } = useParams()

    return (
        <NavbarRightStyled>
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile username={username} />
        </NavbarRightStyled>
    );
}

export default NavbarRight;

const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */

  .profile {
    background: yellow;
  }
`;
