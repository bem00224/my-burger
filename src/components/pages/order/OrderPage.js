import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import styled from 'styled-components';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const [ menu, setMenu ] = useState(fakeMenu.SMALL)

  //comportements

  const handleAdd = (newProduct) => {
    //copy du tableau
    const newProductCopy = [...menu]
    //manip de la copie du tab
    const newProductCopyUpdated = [ newProduct,...newProductCopy]
    //utilisation du setter
    setMenu(newProductCopyUpdated)
  }
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd
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