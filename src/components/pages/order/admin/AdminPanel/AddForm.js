import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../enums/product';
import Form from './Form';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage';
import SubmitButton from './SubmitButton';
import { replaceFrenchCommaWithDot } from '../../../../../utils/maths';

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage()


  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
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
  
  //affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
        <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  )
}
