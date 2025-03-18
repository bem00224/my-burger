import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import styled from 'styled-components';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  //comportements
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }
  //afichage
    
    return (
        <OrderPageStyled>
          <div className="container">
            <OrderContext.Provider value={orderContextValue}>
              <Navbar />
              <Main/>
            </OrderContext.Provider>
          </div>
        </OrderPageStyled>
    );
}

export default OrderPage;
const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;