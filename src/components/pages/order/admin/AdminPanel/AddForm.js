import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../enums/product';
import Form from './Form';
import Button from '../../../../reusable-ui/Button';
import SubmitMessage from './SubmitMessage';

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
  
  //affichage
  return (
    <Form 
      product={newProduct} 
      onSubmit={handleSubmit} 
      onChange={handleChange} 
      isSubmitted={isSubmitted}
      QUELQUECHOSE={
        <>
          <Button
            className="submit-button"
            label={"Ajouter un nouveau produit au menu"}
            version="success"
          />
          {isSubmitted && <SubmitMessage />}
        </>
      }
    />
  )
}
