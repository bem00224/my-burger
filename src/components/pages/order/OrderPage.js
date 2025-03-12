import React from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import styled from 'styled-components';
import { theme } from '../../../theme';

const OrderPage = () => {
    
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar />
                <Main/>
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