import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { toast } from 'react-toastify';
import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

const NavbarRight = () => {
  //state
  const { username } = useParams()
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)
  //comportements
  //affichage


  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

    return (
        <NavbarRightStyled>
            <ToggleButton
              isChecked={isModeAdmin}
              labelIfUnchecked="ACTIVER LE MODE ADMIN"
              labelIfChecked="DÉSACTIVER LE MODE ADMIN"
              onToggle={displayToastNotification}
            />
            <Profile username={username} />
            <ToastAdmin />
        </NavbarRightStyled>
    );
}

export default NavbarRight;

const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
