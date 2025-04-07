import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import { getInputTextsConfig } from './inputTextsConfig';
import Button from '../../../../reusable-ui/Button';
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import Input from '../../../../reusable-ui/Input';

export const EMPTY_PRODUCT = {
  id: "",
  imageSource: "",
  title: "",
  price: 0,
}

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)


  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID()
      //id: new Date().getTime()
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySuccessMessage()
  }
  
  const handleChange = (e) => {
    //const {name,value} = e.target
    setNewProduct({...newProduct, [e.target.name]:e.target.value})
  }
 
  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => { setIsSubmitted(false)}, 2000 )
  }

  const inputTexts = getInputTextsConfig(newProduct)
  
  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <Input {...input} key={input.id} onChange={handleChange} version="minimalist" />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
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