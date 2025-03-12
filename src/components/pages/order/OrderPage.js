import React from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import styled from 'styled-components';

const OrderPage = () => {
    
    return (
        <OrderPageStyled>
            <Navbar />
            <Main/>
        </OrderPageStyled>
    );
}

export default OrderPage;
const OrderPageStyled = styled.div`
  border: 1px solid gray;
`;