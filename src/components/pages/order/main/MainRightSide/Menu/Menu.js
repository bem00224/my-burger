import React, { useContext } from 'react'
import Cards from '../../../../../reusable-ui/Cards'
import { formatPrice } from '../../../../../../utils/maths'
import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext'
import EmptyMenuClient from './EmptyMenuClient'
import EmptyMenuAdmin from './EmptyMenuAdmin'
import { checkIfProductIsClicked } from './helper'
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from '../../../../../../enums/product'

export default function Menu() {
  const {
    menu, 
    isModeAdmin, 
    handleDelete, 
    resetMenu, 
    productSelected, 
    setProductSelected, 
    setIsCollapsed, 
    setCurrentTabSelected, 
    titleEditRef
  } = useContext(OrderContext)
  //state
  

  //comportements (gestionnaire de state ou "state handlers")
  const handleClick = async (idProductClicked) => {
    if(!isModeAdmin) return

    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = menu.find((product) => product.id === idProductClicked )
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }
    
  //affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    handleDelete(idProductToDelete)
    if (idProductToDelete === productSelected.id) {
      setProductSelected(EMPTY_PRODUCT);
    }
    if (titleEditRef?.current) {
      titleEditRef.current.focus();
    }
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({id, imageSource,price,title}) => {
        return (
            <Cards 
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={() => handleClick(id) }
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsClicked(id, productSelected.id)}
            />
        )
      } )}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /*grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`