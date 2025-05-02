import React, { useContext } from 'react'
import Cards from '../../../../../reusable-ui/Cards'
import { formatPrice } from '../../../../../../utils/maths'
import styled from 'styled-components'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext'
import EmptyMenuClient from './EmptyMenuClient'
import EmptyMenuAdmin from './EmptyMenuAdmin'
const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
  //state
  const {menu, isModeAdmin, handleDelete, resetMenu, setProductSelected} = useContext(OrderContext)
  

  //comportements
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }
  const handleClick = (idProductClicked) => {
    console.log(idProductClicked)
    const productSelected = menu.find((product) => product.id === idProductClicked )
    setProductSelected(productSelected)
  }
    
  //affichage

  return (
    <MenuStyled className="menu">
      {menu.map(({id, imageSource,price,title}) => {
        return (
            <Cards 
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onDelete={() => handleDelete(id)}
              onClick={() => handleClick(id) }
            />
        )
      } )}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`