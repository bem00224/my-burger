import React, { useState } from 'react'
import Cards from '../../../reusable-ui/Cards'
import { fakeMenu1 } from '../../../../fakeData/fakeMenu'

export default function Menu() {
    const [ menu, setMenu ] = useState(fakeMenu1)

  return (
    <div>
      {menu.map(({id, imageSource,price,title}) => {
        return (
            <Cards 
                key={id}
                imageSource={imageSource}
                price={price}
                title={title}
            />
        )
      } )}
    </div>
  )
}
