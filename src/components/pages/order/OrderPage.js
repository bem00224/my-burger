import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import styled from 'styled-components';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { deepClone } from '../../../utils/array';

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const [ menu, setMenu ] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)

  //comportements

  const handleAdd = (newProduct) => {
    //copy du tableau
    const menuCopy = deepClone(menu)
    //manip de la copie du tab
    const menuUpdated = [ newProduct,...menuCopy]
    //utilisation du setter
    setMenu(menuUpdated)
  }
  const handleDelete =(idOfProductToDelete) => {
    //1; copy du state
    const menuCopy = deepClone(menu)
    //2. manip de la copie du state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
    //3.Update du state
    setMenu(menuUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    // 1. copie du state
    const menuCopy = deepClone(menu)
    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdited.id )
    menuCopy[indexOfProductToEdit] = productBeingEdited
    // 3. update du state
    setMenu(menuCopy)
  }
  

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM)
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
    handleAdd,
    handleDelete,
    handleEdit,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
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