import React, { useState } from 'react'
import Cards from '../../../reusable-ui/Cards'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { formatPrice } from '../../../../utils/maths'
import styled from 'styled-components'
import { theme } from '../../../../theme'

export default function Menu() {
    const [ menu, setMenu ] = useState(fakeMenu2)

  return (
    <MenuStyled className="menu">
      {menu.map(({id, imageSource,price,title}) => {
        return (
            <Cards 
                key={id}
                title={title}
                imageSource={imageSource}
                leftDescription={formatPrice(price)}
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