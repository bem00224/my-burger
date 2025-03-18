import React, { useContext } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { theme } from '../../../../theme/index'
import Admin from '../admin/Admin';
import OrderContext from '../../../../context/OrderContext';

const Main = () => {
  //state
  const { isModeAdmin } = useContext(OrderContext)
  //comportements
  //affichage
  
    return (
        <MainStyled>
            {/* <div className="basket">Basket</div> */}
            <Menu />
            {isModeAdmin ? (<Admin/>) : "" }
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  /* .basket {
    background: pink;
  } */
`