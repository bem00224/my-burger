import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import styled from 'styled-components'
import ImagePreview from './ImagePreview'
import { getInputTextsConfig } from './inputTextsConfig'
import Input from '../../../../reusable-ui/Input'
import { EMPTY_PRODUCT } from '../../../../../enums/product'


export default function EditForm() {
  const {productSelected} = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected)
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT)
  const handleChange = (e) => {
    setProductBeingEdited({...productBeingEdited, [e.target.name]:e.target.value})
  }

  return (
    <EditFormStyled>
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <Input {...input} key={input.id} onChange={handleChange} version="minimalist" />
        ))}
      </div>
      <div className="submit"></div>
    </EditFormStyled>
  )
}
const EditFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`