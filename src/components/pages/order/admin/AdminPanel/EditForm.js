import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import EditInfoMessage from './EditInfoMessage'
import Form from './Form'



export default function EditForm() {
  // state
  const {productSelected, setProductSelected, handleEdit, titleEditRef} = useContext(OrderContext)

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target
    
    const productBeingEdited = {...productSelected, [name]:value}

    setProductSelected(productBeingEdited) // cette ligne update le formulaire
    handleEdit(productBeingEdited, event) // cette ligne update le menu
  }

  // affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  )
}
